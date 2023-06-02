import React from 'react'
import auth from '../firebase'
import moment from 'moment'

const Card = ({ videoId, thumbnail, title, viewCount, commentCount, likeCount, duration }) => {
  const formatedDuration = moment.duration(duration).minutes() + ":" + moment.duration(duration).seconds().toString().padStart(2, "0");
  const showUser = () => {
    const user = auth.currentUser;
    console.log(user.displayName)
    console.log(user)
    console.log(user.uid)
  }

  return (
    <a className='card' href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank">
      <div className='thumbnail'>
        <div className="background" style={{ backgroundImage: `url(${thumbnail})` }}>
          <span className='duration'>{formatedDuration}</span>
        </div>
      </div>
      <div className="card-details">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-info">
          <p><i className="fa-solid fa-eye"></i> {viewCount} Views </p>
          <p><i className="fa-solid fa-comment"></i> {commentCount} comments</p>
          <p><i className="fa-solid fa-thumbs-up"></i> {likeCount} likes</p>
        </div>
      </div>
    </a>
  )
}

export default Card
