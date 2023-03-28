import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { Fragment, useState } from 'react'
import auth from '../../firebase';


const Register = ({ backgroundChange, backgroundRevert, loginShow }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  // The onChange event handler is a callback function that updates the formData state object. It uses the spread operator ... to create a new object that copies all the properties of the current formData object and overwrites the value of the property with the name attribute of the input field that triggered the event with its new value.

  const signUp = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials)
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <Fragment>
      <form className='inputs' onSubmit={signUp}>
        <input
          className='input'
          type="text"
          placeholder='Name'
          name='name'
          onFocus={backgroundChange}
          onBlur={backgroundRevert}
          value={name}
          onChange={e => onChange(e)}
        />
        <input
          className='input'
          type="email"
          placeholder='E-mail'
          name='email'
          onFocus={backgroundChange}
          onBlur={backgroundRevert}
          autoComplete='username'
          value={email}
          onChange={e => onChange(e)}
        />
        <input
          className='input'
          type="password"
          name='password'
          placeholder='Password'
          onFocus={backgroundChange}
          onBlur={backgroundRevert}
          autoComplete='new-password'
          value={password}
          onChange={e => onChange(e)}
        />
        <input
          className='input'
          type="password"
          name='password2'
          placeholder='Confirm Password'
          onFocus={backgroundChange}
          onBlur={backgroundRevert}
          autoComplete='new-password'
          value={password2}
          onChange={e => onChange(e)}
        />
        <input type="submit" className='btn' value='Register' onFocus={backgroundChange} onBlur={backgroundRevert} />
        <div className="question">
          <p>Already a member? </p> <div className='switch' onClick={loginShow}>Login</div>
        </div>
      </form>
    </Fragment>
  )
}

export default Register
