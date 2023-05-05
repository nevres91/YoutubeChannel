import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import auth from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../../slices/auth';


const Login = ({ backgroundChange, backgroundRevert, registerShow }) => {
  const dispatch = useDispatch();
  // Log in with GOOGLE
  const loginWithGoogle = () => {
    dispatch(googleLogin());
  }
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  const navigate = useNavigate();
  const setUserDataInStorage = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Sign in with email and password
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setUserDataInStorage(userCredential);
        navigate('/landing');
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <Fragment>
      <form className='inputs' onSubmit={signIn}>
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
          autoComplete='current-password'
          value={password}
          onChange={e => onChange(e)}
        />
        <input type="submit" className='btn' value='Login' onFocus={backgroundChange} onBlur={backgroundRevert} />
        <div className="question">
          <p>Not a member?</p>  <div className='switch' onClick={registerShow}>Register</div>
        </div>
        <div className="question">
          <p>Log in with</p>  <div className='switch' onClick={loginWithGoogle}>Google</div>
        </div>
      </form>
    </Fragment>
  )
}

export default Login
