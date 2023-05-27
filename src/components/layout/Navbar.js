import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../slices/auth'
import { clearVideos } from '../../slices/videos'
import { signOut } from 'firebase/auth'
import auth from '../../firebase'



const Navbar = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    signOut(auth);
    dispatch(logout());
    dispatch(clearVideos());
    setCurrentUser(null)
    localStorage.removeItem('user');
  }

  const [currentUser, setCurrentUser] = useState({ isLoading: true, user: null });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        await user.reload();
        setCurrentUser({ isLoading: true, user });
      } else {
        setCurrentUser({ isLoading: false, user: null })
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (currentUser?.user) {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        const updatedUser = { ...currentUser.user, displayName: user.displayName };
        setCurrentUser({ isLoading: false, user: updatedUser });
      });
      return () => unsubscribe();
    }
  }, [currentUser?.user]);



  if (currentUser?.isLoading) {
    return (
      <nav className='navbar'>
        <h1 className='channel-link'><a href="https://www.youtube.com/@dirton2wheels295/videos" target="_blank" rel='noreferrer'><span><i className="youtube icon"></i></span>Youtube</a></h1>
        <ul>
          <li><a href="/#">Register</a></li>
          <li><Link onClick={logOut} href="/#">Logout</Link></li>
          <li><a href="/#">Bikes</a></li>
        </ul>
      </nav>
    )
  }

  return currentUser?.user ? (
    <nav className='navbar'>
      <h1 className='channel-link'><a href="https://www.youtube.com/@dirton2wheels295/videos" target="_blank" rel='noreferrer'><span><i className="youtube icon"></i></span>Youtube</a></h1>
      <ul>
        <li><h3>User {currentUser?.user.displayName} is logged in </h3></li>
        <li><a href="/#">Register</a></li>
        <li><Link onClick={logOut} href="/#">Logout</Link></li>
        <li><Link onClick={logOut} to='/bikes'>Bikes</Link></li>
      </ul>
    </nav>
  ) : (<nav className='navbar'>
    <h1 className='channel-link'><a href="https://www.youtube.com/@dirton2wheels295/videos" target="_blank" rel='noreferrer'><span><i className="youtube icon"></i></span>Youtube</a></h1>
    <ul>
      <li><h3>You're currently not logged in, please consider registering.</h3></li>
      <li><a href="/#">Register</a></li>
      <li><Link onClick={logOut} href="/#">Logout</Link></li>
      <li><Link onClick={logOut} to='/bikes'>Bikes</Link></li>
    </ul>
  </nav>)
}

export default Navbar
