import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BikeCard from './BikeCard'
import FeaturedBike from './FeaturedBike'
import { selectBike } from '../slices/selectedBike'
import { useDispatch, useSelector } from 'react-redux'

const Bikes = () => {
  const dispatch = useDispatch();

  // const [selectedBike, setSelectedBike] = useState(null);
  const selectedBike = useSelector(state => state.bike.selectedBike)

  const handleBikeClick = (bike) => {
    // setSelectedBike(bike);
    dispatch(selectBike(bike));
    console.log(selectedBike)
  }


  return (
    <div className='bikes-page'>
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
