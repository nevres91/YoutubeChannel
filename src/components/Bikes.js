import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BikeCard from './BikeCard'
import FeaturedBike from './FeaturedBike'

const Bikes = () => {

  const [selectedBike, setSelectedBike] = useState(null);

  const handleBikeClick = (bike) => {
    setSelectedBike(bike);
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
