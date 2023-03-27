import React, { Fragment } from 'react'


const Register = ({ backgroundChange, backgroundRevert, loginShow }) => {
  return (
    <Fragment>
      <form className='inputs'>
        <input type="text" placeholder='Name' onFocus={backgroundChange} onBlur={backgroundRevert} />
        <input type="email" placeholder='E-mail' onFocus={backgroundChange} onBlur={backgroundRevert} autoComplete='username' />
        <input type="password" placeholder='Password' onFocus={backgroundChange} onBlur={backgroundRevert} autoComplete='new-password' />
        <input type="password" placeholder='Confirm Password' onFocus={backgroundChange} onBlur={backgroundRevert} autoComplete='new-password' />
        <input type="submit" className='btn' value='Register' onFocus={backgroundChange} onBlur={backgroundRevert} />
        <div className="question">
          <p>Already a member? </p> <div className='switch' onClick={loginShow}>Login</div>
        </div>
      </form>
    </Fragment>
  )
}

export default Register
