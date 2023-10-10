import React, { useState, useEffect } from 'react'
import motor from '../img/5.jpg';
import dt from '../img/dt.jpeg';
import cr from '../img/cr.jpg';
import yz from '../img/yz.jpg';
import ktm from '../img/ktm.jpeg';
import ImageCard from './ImageCard';
import auth from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadUser } from '../slices/auth';
import { loginBike } from '../slices/selectedBike';
import { Link } from 'react-router-dom';
import { clearVideos } from '../slices/videos';
import { signOut } from 'firebase/auth';
import { logout } from '../slices/auth';


const BikeCard = ({ selectedBike }) => {


  const logOut = () => {
    signOut(auth);
    dispatch(logout());
    dispatch(clearVideos());
    localStorage.removeItem('user');
  }


  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log('user object here')
  //   console.log(user)
  //   if (!user) {
  //     navigate('/landing')
  //   }
  // }, [])
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
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
        dispatch(loginBike('yz'))
      } else {
        setUser(null);
        localStorage.removeItem("user");
        navigate('/landing')
      }
    })

    return () => {
      unsubscribe();
    }
  }, []);

  const scrollContainer = document.querySelector('.images-list');
  var cumulativeDelta = 0;
  // const scrollIncrement = 100;

  // if (scrollContainer) {
  //   scrollContainer.addEventListener('wheel', (e) => {
  //     e.preventDefault();
  //     cumulativeDelta += e.deltaY;
  //     // const direction = e.deltaY > 0 ? 1 : -1;
  //     // const scrollDistance = direction * scrollIncrement;
  //     // const currentPosition = scrollContainer.scrollLeft;
  //     // const targetPosition = currentPosition + scrollDistance;
  //     scrollContainer.scrollLeft += cumulativeDelta * 2;
  //     cumulativeDelta = 0;
  //   })
  // }


  return (
    <div className='bike-card-container'>
      <div className='bike-photo'>
        <div className="bike-title-1">
          <h1>{
            selectedBike === 'cr' ? 'HONDA' :
              selectedBike === 'ktm' ? 'KTM' : 'YAMAHA'}
          </h1>
          <div className="navbar-bike-buttons">
            <ul>
              <li><Link className='bike-button'><i className="fa-solid fa-motorcycle fa-lg"></i></Link></li>
              <li><Link to='/'><i className="home icon"></i></Link></li>
              <li><Link to="/about"><i className="clipboard outline icon"></i></Link></li>
              <li><Link onClick={logOut} ><i className="sign-out icon"></i></Link></li>
            </ul>
          </div>
        </div>
        <div className="bike-content">
          <div className='bike-content-2'>
            <div className='bike-card' style={{
              border: selectedBike === 'cr' ? '10px inset #ffffff' :
                selectedBike === 'dt' ? '10px inset #efff5f' :
                  selectedBike === 'ktm' ? '10px inset #827b76' : '10px inset #000000',
              boxShadow:
                selectedBike === 'cr' ? '0px 0px 123px 39px rgba(255, 0, 0, 0.75)' :
                  selectedBike === 'dt' ? '0px 0px 123px 39px rgba(124, 77, 243, 0.75)' :
                    selectedBike === 'ktm' ? '0px 0px 123px 39px rgba(255, 123, 0, 0.75)' : '0px 0px 123px 39px rgba(0, 34, 255, 0.75)'
            }}>
              <img src={
                selectedBike === 'ktm' ? ktm :
                  selectedBike === 'dt' ? dt :
                    selectedBike === 'cr' ? cr : yz}
                alt="Loading" />
              <div className="bike-title">
              </div>
            </div>
            <h1 className='bike-title-2'>{
              selectedBike === 'cr' ? 'HONDA' :
                selectedBike === 'ktm' ? 'KTM' : 'YAMAHA'}</h1>
          </div>
          <div className="images-list"
            style={{
              border:
                selectedBike === 'cr' ? '2px solid red' :
                  selectedBike === 'dt' ? '2px solid yellow' :
                    selectedBike === 'ktm' ? '2px solid orange' : '2px solid blue',
              background:
                selectedBike === 'cr' ? 'rgba(255, 116, 116, 0.2)' :
                  selectedBike === 'dt' ? 'rgba(245, 253, 136, 0.2)' :
                    selectedBike === 'ktm' ? 'rgba(255, 171, 68, 0.2)' : 'rgba(120, 125, 255, 0.2)'
            }}>

            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div>

        </div>

        <div className="bike-title">
          <h1>{
            selectedBike === 'cr' ? 'HONDA' :
              selectedBike === 'ktm' ? 'KTM' : 'YAMAHA'}</h1>
        </div>
      </div>
      <div className="images-list-2"
        style={{
          border:
            selectedBike === 'cr' ? '2px solid red' :
              selectedBike === 'dt' ? '2px solid yellow' :
                selectedBike === 'ktm' ? '2px solid orange' : '2px solid blue',
          background:
            selectedBike === 'cr' ? 'rgba(255, 116, 116, 0.2)' :
              selectedBike === 'dt' ? 'rgba(245, 253, 136, 0.2)' :
                selectedBike === 'ktm' ? 'rgba(255, 171, 68, 0.2)' : 'rgba(120, 125, 255, 0.2)'
        }}>

        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>

    </div>
  )
}

export default BikeCard
