import React from 'react'

const Login = ({ backgroundChange, backgroundRevert, registerShow }) => {


  return (
    <form className='inputs'>
      <input className='input' type="email" placeholder='E-mail' onFocus={backgroundChange} onBlur={backgroundRevert} autoComplete='username' />
      <input className='input' type="password" placeholder='Password' onFocus={backgroundChange} onBlur={backgroundRevert} autoComplete='current-password' />
      <input type="submit" className='btn' value='Login' onFocus={backgroundChange} onBlur={backgroundRevert} />
      <div className="question">
        <p>Not a member?</p>  <div className='switch' onClick={registerShow}>Register</div>
      </div>
    </form>
  )
}

export default Login
