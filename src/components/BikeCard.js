import React from 'react'
import motor from '../img/5.jpg';
import dt from '../img/dt.jpeg';
import cr from '../img/cr.jpg';
import yz from '../img/yz.jpg';
import ktm from '../img/ktm.jpeg';
import ImageCard from './ImageCard';

const BikeCard = ({ selectedBike }) => {

  const scrollContainer = document.querySelector('.images-list');
  var cumulativeDelta = 0;
  // const scrollIncrement = 100;

  if (scrollContainer) {
    scrollContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      cumulativeDelta += e.deltaY;
      // const direction = e.deltaY > 0 ? 1 : -1;
      // const scrollDistance = direction * scrollIncrement;
      // const currentPosition = scrollContainer.scrollLeft;
      // const targetPosition = currentPosition + scrollDistance;
      scrollContainer.scrollLeft += cumulativeDelta * 2;
      cumulativeDelta = 0;
    })
  }


  return (
    <div className='bike-card-container'>
      <div className='bike-photo'>
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
        </div>
        <div className="bike-title">
          <h1>{
            selectedBike === 'cr' ? 'HONDA' :
              selectedBike === 'ktm' ? 'KTM' : 'YAMAHA'}</h1>
        </div>
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
  )
}

export default BikeCard
