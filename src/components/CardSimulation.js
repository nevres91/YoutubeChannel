import React from 'react'
import auth from '../firebase'
import moment from 'moment'
import image from '../img/cr.jpg'

const CardSimulation = () => {

  return (
    <div className="link-div">
      <a className='card' href={`https://www.youtube.com/watch?v=Jdl2RMlePtY`} target="_blank">
        <div className='thumbnail'>
          <div className="background" style={{ backgroundColor: `red` }}>
            <span className='duration'>15:00</span>
          </div>
        </div>
        <div className="card-details">
          <div className="card-title">
            <h3>Video Title</h3>
          </div>
          <div className="card-info">
            <p><i className="fa-solid fa-eye"></i> 15 Views </p>
            <p><i className="fa-solid fa-comment"></i> 3 comments</p>
            <p><i className="fa-solid fa-thumbs-up"></i> 150 likes</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default CardSimulation
