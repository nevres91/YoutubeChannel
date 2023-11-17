import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import auth from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../../slices/auth';


const Login = ({ backgroundChange, backgroundRevert, registerShow }) => {
  const [userAlert, setUserAlert] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [noEmail, setNoEmail] = useState(false);
  const [noPassword, setNoPassword] = useState(false);
  const dispatch = useDispatch();
  // Log in with GOOGLE
  const loginWithGoogle = () => {
    dispatch(googleLogin());
  }
  const [formData, setFormData] = useState({
    email: 'test1@gmail.com',
    password: '111111'
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
        if (error.code === 'auth/user-not-found') {
          setUserAlert(true)
          setTimeout(() => {
            setUserAlert(false)
          }, 4000);
        } else if (error.code === 'auth/wrong-password') {
          setPasswordAlert(true)
          setTimeout(() => {
            setPasswordAlert(false)
          }, 4000);
        } else if (error.code === 'auth/invalid-email') {
          setNoEmail(true)
          setTimeout(() => {
            setNoEmail(false)
          }, 4000);
        } else if (error.code === 'auth/internal-error') {
          setNoPassword(true)
          setTimeout(() => {
            setNoPassword(false)
          }, 4000);
        }
        console.log(error.code)
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
        {userAlert ? (
          <div className="alert">User does not exist!</div>
        ) : passwordAlert ? (
          <div className="alert">Wrong password entered!</div>
        ) : noEmail ? (
          <div className="alert">Please enter valid E-mail adress!</div>

        ) : noPassword ? (
          <div className="alert">Please enter Password!</div>

        ) : ''}
        <input type="submit" className='btn' value='Login' onFocus={backgroundChange} onBlur={backgroundRevert} />
        <div className="google-div">
          <p>Or log in with</p>
          <div className='google-span' onClick={loginWithGoogle}>
            <span className="span-g">G</span>
            <span className="span-o-red">o</span>
            <span className="span-o-yellow">o</span>
            <span className="span-g">g</span>
            <span className="span-l">l</span>
            <span className="span-o-red">e</span>
          </div>
          {/* <div className='google-button' onClick={loginWithGoogle}>

          </div> */}
        </div>


        <div className="question">
          <p>Not a member?</p>  <div className='switch' onClick={registerShow}>Register</div>
        </div>
      </form>
    </Fragment>
  )
}

export default Login
