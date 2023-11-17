import React, { useEffect, useState } from 'react'
import auth from '../../firebase';
import Login from '../auth/Login';
import Register from '../auth/Register';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { getRedirectResult } from 'firebase/auth';
import Spinner from '../Spinner';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Showing LogIn or Register forms
  const [loginForm, setLoginForm] = useState(true);

  const loginShow = () => {
    setLoginForm(true);
  }
  const registerShow = () => {
    setLoginForm(false);
  }

  // Changing background color on focusing a form.
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

  useEffect(() => {
    // Get redirect results from sign in with GOOGLE
    const redirectresults = async () => {
      setLoading(true);

      const result = await getRedirectResult(auth);
      if (result) {
        const user = result.user;
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const profile = {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/landing');
      }

      setLoading(false);
    }
    // Sign in with Email and Password
    if (user) {
      navigate('/landing')
    } else {
      navigate('/')
    }
    redirectresults();
  }, []);

  if (loading) {
    return <Spinner />
  }

  return (
    <div className='landing' >
      <div className="overlay"  >
        <div className="landing-inner">
          <div className="landing-title">
            <i className='wheel-icon' />
            <h1 className='title h-1'>  Dirty Riders</h1>
            <span className='title h-2'>  Dirty Riders</span>
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

export default Dashboard
