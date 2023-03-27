import React, { useState } from 'react'
import Login from '../auth/Login';
import Register from '../auth/Register';

const Landing = () => {

  const [loginForm, setLoginForm] = useState(true);

  const loginShow = () => {
    setLoginForm(true);
  }
  const registerShow = () => {
    setLoginForm(false);
  }

  const backgroundChange = () => {
    const overlayDiv = document.querySelector('.overlay');
    overlayDiv.style.background = 'radial-gradient(circle at center, black 8%, transparent 130%)'
    overlayDiv.style.transition = ' background 3s ease-in-out'
  }
  const backgroundRevert = () => {
    const overlayDiv = document.querySelector('.overlay');
    overlayDiv.style.background = 'radial-gradient(circle at center, black 0%, transparent 70%)'
    overlayDiv.style.transition = ' background 3s ease-in-out'
  }
  return (
    <div className='landing' >
      <div className="overlay"  >
        <div className="landing-inner">
          <div className="landing-title">
            <i className='wheel-icon' />
            <h1 className='title'>  Dirty Riders</h1>
          </div>
          {loginForm ? (
            <Login backgroundChange={backgroundChange} backgroundRevert={backgroundRevert} registerShow={registerShow} />
          ) : (
            <Register backgroundChange={backgroundChange} backgroundRevert={backgroundRevert} loginShow={loginShow} />
          )}
        </div>
      </div>
    </div >
  )
}

export default Landing
