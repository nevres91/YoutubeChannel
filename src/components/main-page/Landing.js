import React, { useState, useEffect } from 'react'
import Cards from '../Cards'
import CardsMenu from '../CardsMenu'
import auth from '../../firebase'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
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
  const videos = useSelector((state) => state.videos.videos)

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        await user.reload();
        setUser(user);
        dispatch(loadUser({
          dispayName: user.displayName,
          email: user.email
        }))
        if (!videos) { // used if statement because duplicated videos fetched after landing component refreshed without page refresh
          getVideos();
        }
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
    return <div className='loading-spinner'></div>
  }

  return user ? (
    <div className='container'>
      <div className="landing-overlay">
        <div className="inner-container">
          {/* <div className='menu-div'>
            <CardsMenu />
            <h2>Hello {user.displayName}</h2>
          </div> */}
          <div className="landing-content">
            <div className="landing-sidebar">
              <ul>
                <li><Link to='/bikes' ><i className="fa-solid fa-motorcycle fa-lg fa-flip-horizontal"></i><span> Featured bikes</span> </Link></li>
                <li><Link to='/fixes' ><i className="fa-solid fa-wrench fa-xl"></i><span> Common fixes</span> </Link></li>
                <li><Link to='/order' ><i className="fa-solid fa-truck-fast fa-lg"></i><span> Order Parts</span> </Link></li>
              </ul>
              <footer>
                <a href='https://www.facebook.com/nevres.muratovic' className='facebook' target='_blank'><i className="fa-brands fa-square-facebook fa-xl"></i></a>
                <a href='https://github.com/nevres91' className='github' target='_blank'><i className="fa-brands fa-square-github fa-xl"></i></a>
                <a href='https://www.linkedin.com/in/nevres-muratovic-83861a264/' className='linkedin' target='_blank'><i className="fa-brands fa-linkedin fa-xl"></i></a>
              </footer>
            </div>
            <div className="landing-cards">
              <CardsMenu />

              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : navigate('/');
}

export default Landing