import React, { useState, useEffect } from 'react'
import Cards from '../Cards'
import CardsMenu from '../CardsMenu'
import auth from '../../firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { loadUser } from '../../slices/auth'
import { useGetVideos } from '../../actions/videos';
import getComents from '../../actions/coments';



const Landing = () => {

  const { getVideos } = useGetVideos();

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        await user.reload();
        setUser(user);
        dispatch(loadUser({
          dispayName: user.displayName,
          email: user.email
        }))
        getVideos();
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
      setIsLoading(false);
    })

    return () => {
      unsubscribe();
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return user ? (
    <div className='container'>
      <div className="landing-overlay">
        <div className="inner-container">
          <div className='menu-div'>
            <CardsMenu />
            <h2>Hello {user.displayName}</h2>
          </div>
          <Cards />
        </div>
      </div>
    </div>
  ) : navigate('/');
}

export default Landing