import React from 'react'

const FeaturedBike = ({ onBikeClick }) => {
  const bikes = ['ktm, dt, yz, cr']
  return (
    <div className='container-featured'>
      <div className="card-featured card2" onClick={() => onBikeClick('ktm')}>
        <h2>KTM 125</h2>
        <p>a 2008 KTM, beast wanabe</p>
        <span>KTM</span>
        <div className="pic"></div>
        <button></button>
      </div>
      <div className="card-featured card3" onClick={() => onBikeClick('yz')}>
        <h2>YZ 125</h2>
        <p>a 1999 YAMAHA YZ, the best of its time</p>
        <span>YAMAHA</span>
        <div className="pic"></div>
        <button></button>
      </div>
      <div className="card-featured" onClick={() => onBikeClick('dt')}>
        <h2>DT 80LC 2</h2>
        <p>a 1986 YAMAHA DT, an old piece of junk</p>
        <span>YAMAHA</span>
        <div className="pic"></div>
        <button></button>
      </div>
      <div className="card-featured card4" onClick={() => onBikeClick('cr')}>
        <h2>CR 125R</h2>
        <p>a 2000 HONDA CR, in better shape than its driver</p>
        <span>HONDA</span>
        <div className="pic"></div>
        <button></button>
      </div>
    </div>
  )
}

export default FeaturedBike
