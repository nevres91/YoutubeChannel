import React, { useState, useEffect } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import maciag from '../img/maciag.jpg'
import mx from '../img/24mx.jpg'
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import auth from '../firebase';
import { logout } from '../slices/auth';
import { clearVideos } from '../slices/videos';
import { loadUser } from '../slices/auth';
import PartsLegend from './PartsLegend';

const Order = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const logOut = () => {
    signOut(auth);
    dispatch(logout());
    dispatch(clearVideos());
    localStorage.removeItem('user');
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        await user.reload();
        setUser(user);
        dispatch(loadUser({
          dispayName: user.displayName,
          email: user.email
        }))
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


  const sellerPage = (link) => {
    window.open(link, '_blank')
  }
  return (
    <div className='order'>
      <div className="order-content-1">
        <div className="sellers-list">
          <ul className='sellers'>
            <li onClick={() => sellerPage('https://www.24mx.com/')} className='mx24'>24 MX</li>
            <li onClick={() => sellerPage('https://www.maciag-offroad.com/')} className='maciag'>Maciag Offroad</li>
            <li onClick={() => sellerPage('https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=dirt+bike+accesories&_sacat=0&LH_TitleDesc=0&LH_FS=1&_odkw=yz+125+1999&_osacat=0')} className='ebay'>e-bay</li>
            <li onClick={() => sellerPage('https://olx.ba/shops/motostar/aktivni')} className='motostar'>Motostar Živinice</li>
            <li onClick={() => sellerPage('https://www.aliexpress.com/w/wholesale-dirt-bike-accessories.html?catId=0&initiative_id=AS_20231012111046&SearchText=dirt+bike+accessories&spm=a2g0o.best.1000002.0')} className='ali'>AliExpress</li>
            <li onClick={() => sellerPage('https://olx.ba/pretraga?q=kroser')} className='olx'>Olx</li>
            <li onClick={() => sellerPage('https://www.motosport.com/dirtbike/parts')} className='motosport'>Motosport</li>
            <li onClick={() => sellerPage('https://www.revzilla.com/dirt-bike-parts')} className='revzila'>revzila</li>
          </ul>
        </div>
        <ul className='sellers-logos'>
          <li onClick={() => sellerPage('https://www.24mx.com/')} className='seller-1'><Link to='https://www.24mx.com/'></Link></li>
          <li onClick={() => sellerPage('https://www.maciag-offroad.com/')} className='seller-2'><Link to='https://www.maciag-offroad.com/'></Link></li>
          <li onClick={() => sellerPage('https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=dirt+bike+accesories&_sacat=0&LH_TitleDesc=0&LH_FS=1&_odkw=yz+125+1999&_osacat=0')} className='seller-3'><Link to='https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=dirt+bike+accesories&_sacat=0&LH_TitleDesc=0&LH_FS=1&_odkw=yz+125+1999&_osacat=0'></Link></li>
          <li onClick={() => sellerPage('https://olx.ba/shops/motostar/aktivni')} className='seller-4'><Link to='https://olx.ba/shops/motostar/aktivni'></Link></li>
        </ul>
      </div>
      <div className="order-container">
        <div className="order-content-2"></div>
        <div className="order-content-3">
          <p>Here you can order any part for your motorcycle from various websites, no matter what motorcycle you have, dig around until you find what suits you best.</p>
          <div onClick={() => navigate('/legend')} className="bike-image"></div>
        </div>
      </div>
      <div className="order-content-4">
        <ul>
          <li onClick={() => sellerPage('https://www.aliexpress.com/w/wholesale-dirt-bike-accessories.html?catId=0&initiative_id=AS_20231012111046&SearchText=dirt+bike+accessories&spm=a2g0o.best.1000002.0')}><Link to='https://www.aliexpress.com/w/wholesale-dirt-bike-accessories.html?catId=0&initiative_id=AS_20231012111046&SearchText=dirt+bike+accessories&spm=a2g0o.best.1000002.0'></Link></li>
          <li onClick={() => sellerPage('https://olx.ba/pretraga?q=kroser')}><Link to='https://olx.ba/pretraga?q=kroser'></Link></li>
          <li onClick={() => sellerPage('https://www.motosport.com/dirtbike/parts')}><Link to='https://www.motosport.com/dirtbike/parts'></Link></li>
          <li onClick={() => sellerPage('https://www.revzilla.com/dirt-bike-parts')}><Link to='https://www.revzilla.com/dirt-bike-parts'></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Order
