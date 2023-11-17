import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BikeCard from './BikeCard'
import FeaturedBike from './FeaturedBike'
import { selectBike } from '../slices/selectedBike'
import { useDispatch, useSelector } from 'react-redux'
import { clearPhoto } from '../slices/selectedBikePhoto'

const Bikes = () => {
  const dispatch = useDispatch();

  // const [selectedBike, setSelectedBike] = useState(null);
  const selectedBike = useSelector(state => state.bike.selectedBike)

  const handleBikeClick = (bike) => {
    // setSelectedBike(bike);
    dispatch(selectBike(bike));
    dispatch(clearPhoto());
  }
  const choseBike = (bike) => {
    const bikesMenu = document.querySelector('.chose-bike')
    bikesMenu.style.transform = 'TranslateY(-100%)'
    // setSelectedBike(bike);
    dispatch(selectBike(bike));
    dispatch(clearPhoto());
  }


  return (
    <div className='bikes-page'>
      <div className="chose-bike">
        <div className="bikes-container">
          <div onClick={() => choseBike('ktm')} className="bikes orange-border">
            <h1>KTM SX 125</h1>
            <div className="background-div orange"></div>
            <div className="background-div-2 orange"></div>
          </div>
          <div onClick={() => choseBike('yz')} className="bikes blue-border">
            <h1>Yamaha YZ125</h1>
            <div className="background-div blue"></div>
            <div className="background-div-2 blue"></div>
          </div>
          <div onClick={() => choseBike('dt')} className="bikes yellow-border">
            <h1>Yamaha DT80</h1>
            <div className="background-div purple "></div>
            <div className="background-div-2 purple "></div>
          </div>
          <div onClick={() => choseBike('cr')} className="bikes white-border">
            <h1>Honda CR125</h1>
            <div className="background-div red"></div>
            <div className="background-div-2 red"></div>
          </div>
        </div>
      </div>
      <div className="bikes-page-overflow">
        <div className="bikes-content">
          <div className="intro">
          </div>
          <div className="featured-bike">
            <FeaturedBike onBikeClick={handleBikeClick} />
          </div>
          <div className="bikes-main">
            <BikeCard selectedBike={selectedBike} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bikes
