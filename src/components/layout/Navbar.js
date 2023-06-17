import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../slices/auth'
import { clearVideos } from '../../slices/videos'
import { signOut } from 'firebase/auth'
import auth from '../../firebase'



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch();
  const logOut = () => {
    signOut(auth);
    dispatch(logout());
    dispatch(clearVideos());
    setCurrentUser(null)
    localStorage.removeItem('user');
  }

  // Hamburger menu closing
  const closeMenu = () => {
    const hamburger = document.querySelector('.hamburger-content')
    setIsMenuOpen(false);
    hamburger.style.clipPath = 'circle(0% at 0% 0%)'
  }
  // Hamburger menu closing
  const openMenu = () => {
    const hamburger = document.querySelector('.hamburger-content')
    setIsMenuOpen(true)
    hamburger.style.clipPath = 'circle(200% at 0% 0%)'
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
        <h1 className='channel-link'><a href="https://www.youtube.com/@dirton2wheels295/videos" target="_blank" rel='noreferrer'><span><i className="youtube icon"></i></span>DirtOn2wheels</a></h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><a href="/#">Register</a></li>
          <li><Link onClick={logOut} href="/#">Logout</Link></li>
        </ul>
      </nav>
    )
  }

  return currentUser?.user ? (
    <nav className='navbar'>
      <h1 className='channel-link'><a href="https://www.youtube.com/@dirton2wheels295/videos" target="_blank" rel='noreferrer'><span><i className="youtube icon"></i></span>DirtOn2wheels</a></h1>
      <ul>
        {/* <li><h3>Hello {currentUser?.user.displayName} </h3></li> */}
        <li onClick={openMenu} className={`hamburger-button ${isMenuOpen ? 'hidden' : ''} `}><button className='hamburger'><i className="fa-solid fa-bars "></i></button></li>
        <li onClick={closeMenu} className={`close-button ${isMenuOpen ? '' : 'hidden'} `} ><button className='hamburger close'><i className="fa-solid fa-xmark fa-lg"></i></button></li>
        <li><Link to='/'><i className="home icon"></i><span>Home</span></Link></li>
        <li><Link to="/about"><i className="clipboard outline icon"></i><span>About</span></Link></li>
        <li><Link onClick={logOut} href="/#"><i className="sign-out icon"></i><span>Logout</span></Link></li>
      </ul>
      <div className="hamburger-content">
        <ul>
          <li><Link to='/bikes' onClick={closeMenu} ><i className="fa-solid fa-motorcycle fa-lg fa-flip-horizontal"></i><span> Featured bikes</span> </Link></li>
          <li><Link to='/fixes' onClick={closeMenu} ><i className="fa-solid fa-wrench fa-xl"></i><span> Common fixes</span> </Link></li>
          <li><Link to='/order' onClick={closeMenu} ><i className="fa-solid fa-truck-fast fa-lg"></i><span> Order Parts</span> </Link></li>
          <div className='social'>
            <a href='https://www.facebook.com/nevres.muratovic' className='facebook' target='_blank'><i className="fa-brands fa-square-facebook fa-xl"></i></a>
            <a href='https://github.com/nevres91' className='github' target='_blank'><i className="fa-brands fa-square-github fa-xl"></i></a>
            <a href='https://www.linkedin.com/in/nevres-muratovic-83861a264/' className='linkedin' target='_blank'><i className="fa-brands fa-linkedin fa-xl"></i></a>
          </div>
        </ul>
      </div>
    </nav>
  ) : (<nav className='navbar'>
    <h1 className='channel-link'><a href="https://www.youtube.com/@dirton2wheels295/videos" target="_blank" rel='noreferrer'><span><i className="youtube icon"></i></span>DirtOn2wheels</a></h1>
    <ul>
      {/* <li><h3>You're currently not logged in, please consider registering.</h3></li> */}
      <li><Link to='/'>Home</Link></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>)
}

export default Navbar
