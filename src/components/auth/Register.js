import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { Fragment, useState } from 'react'
import auth from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Register = ({ backgroundChange, backgroundRevert, loginShow }) => { //Functions passed in as props in Dashboard!
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);
  const [noPassword, setNoPassword] = useState(false);
  const [passwordsNoMatch, setPasswordsNoMatch] = useState(false);
  const [emailInUse, setEmailInUse] = useState(false);
  const [noName, setNoName] = useState(false);
  const [allFields, setAllFields] = useState(false);



  const navigate = useNavigate();
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
    if (name && email && password && password2) {
      if (password !== password2) {
        setPasswordsNoMatch(true)
        setTimeout(() => {
          setPasswordsNoMatch(false)
        }, 4000);
        return false
      } if (!name) {
        setNoName(true)
        setTimeout(() => {
          setNoName(false)
        }, 4000);
        return false
      } if (!email) {
        setInvalidEmail(true)
        setTimeout(() => {
          setInvalidEmail(false)
        }, 4000);
        return false
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          updateProfile(auth.currentUser, {
            displayName: name
          })
          localStorage.setItem('user', JSON.stringify(userCredentials))
          navigate('/landing');
        }).catch((error) => {
          if (name === '') {
            setNoName(true)
            setTimeout(() => {
              setNoName(false)
            }, 4000);
            return false
          } else if (error.code === 'auth/invalid-email') {
            setInvalidEmail(true)
            setTimeout(() => {
              setInvalidEmail(false)
            }, 4000);
            return false
          } else if (error.code === 'auth/weak-password') {
            setWeakPassword(true)
            setTimeout(() => {
              setWeakPassword(false)
            }, 4000);
            return false
          } else if (error.code === 'auth/internal-error') {
            setNoPassword(true)
            setTimeout(() => {
              setNoPassword(false)
            }, 4000);
            return false
          } else if (error.code === 'auth/email-already-in-use') {
            setEmailInUse(true)
            setTimeout(() => {
              setEmailInUse(false)
            }, 4000);
            return false
          }
          console.log(error.code)
        })
    } else {
      setAllFields(true)
      setTimeout(() => {
        setAllFields(false)
      }, 4000);
      return false
    }
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
        {invalidEmail ? (
          <div className="alert">Please enter a valid E-mail adress!</div>
        ) : weakPassword ? (
          <div className="alert">Password must be atleast 6 characters!</div>

        ) : noPassword ? (
          <div className="alert">Password cannot be empty!</div>

        ) : emailInUse ? (
          <div className="alert">Email already in use!</div>

        ) : passwordsNoMatch ? (
          <div className="alert">Passwords must match!</div>

        ) : noName ? (
          <div className="alert">Please enter your name!</div>

        ) : allFields ? (
          <div className="alert">All fields must be filled</div>

        ) : ''}
        <input type="submit" className='btn' value='Register' onFocus={backgroundChange} onBlur={backgroundRevert} />
        <div className="question">
          <p>Already a member? </p> <div className='switch' onClick={loginShow}>Login</div>
        </div>
      </form>
    </Fragment>
  )
}

export default Register
