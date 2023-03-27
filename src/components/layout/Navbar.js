import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='channel-link'><a href="https://www.youtube.com/@dirton2wheels295/videos" target="_blank"><span><i className="youtube icon"></i></span>Youtube</a></h1>
      <ul>
        <li><a href="/#">Register</a></li>
        <li><a href="/#">Login</a></li>
        <li><a href="/#">Bikes</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
