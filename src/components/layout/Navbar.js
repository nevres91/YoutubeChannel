import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../slices/auth'
import { signOut } from 'firebase/auth'
import auth from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth';

// const Navbar = () => {


//   const [currentUser, setCurrentUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);



//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         await user.reload();
//         setCurrentUser(user);
//       } else {
//         setCurrentUser(null);
//       }
//       setIsLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   // const user = auth.currentUser;
//   const dispatch = useDispatch();
//   const logOut = () => {
//     signOut(auth);
//     dispatch(logout());
//   }

//   if (isLoading) {
//     return <div>Loading...</div>
//   }


//   return currentUser ? (
//     <nav className='navbar'>
//       <h1 className='channel-link'><a href="https://www.youtube.com/@dirton2wheels295/videos" target="_blank" rel='noreferrer'><span><i className="youtube icon"></i></span>Youtube</a></h1>
//       <ul>
//         {currentUser.displayName ? <li><h3>User {currentUser.displayName} is logged in </h3></li> : <h3>User is not logged in </h3>}
//         <li><a href="/#">Register</a></li>
//         <li><Link onClick={logOut} href="/#">Logout</Link></li>
//         <li><a href="/#">Bikes</a></li>
//       </ul>
//     </nav>
//   ) : (<nav className='navbar'>
//     <h1 className='channel-link'><a href="https://www.youtube.com/@dirton2wheels295/videos" target="_blank" rel='noreferrer'><span><i className="youtube icon"></i></span>Youtube</a></h1>
//     <ul>
//       <li><h3>You're currently not logged in, please consider registering.</h3></li>
//       <li><a href="/#">Register</a></li>
//       <li><Link onClick={logOut} href="/#">Logout</Link></li>
//       <li><a href="/#">Bikes</a></li>
//     </ul>
//   </nav>)






// }

// export default Navbar


const Navbar = () => {

  const dispatch = useDispatch();
  const logOut = () => {
    signOut(auth);
    dispatch(logout());
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
    return <div>Loading...</div>
  }

  return currentUser?.user ? (
    <nav className='navbar'>
      <h1 className='channel-link'><a href="https://www.youtube.com/@dirton2wheels295/videos" target="_blank" rel='noreferrer'><span><i className="youtube icon"></i></span>Youtube</a></h1>
      <ul>
        <li><h3>User {currentUser?.user.displayName} is logged in </h3></li>
        <li><a href="/#">Register</a></li>
        <li><Link onClick={logOut} href="/#">Logout</Link></li>
        <li><a href="/#">Bikes</a></li>
      </ul>
    </nav>
  ) : (<nav className='navbar'>
    <h1 className='channel-link'><a href="https://www.youtube.com/@dirton2wheels295/videos" target="_blank" rel='noreferrer'><span><i className="youtube icon"></i></span>Youtube</a></h1>
    <ul>
      <li><h3>You're currently not logged in, please consider registering.</h3></li>
      <li><a href="/#">Register</a></li>
      <li><Link onClick={logOut} href="/#">Logout</Link></li>
      <li><a href="/#">Bikes</a></li>
    </ul>
  </nav>)
}

export default Navbar
