import React from 'react'
import auth from '../firebase'

const Card = () => {
  const showUser = () => {
    const user = auth.currentUser;
    console.log(user.displayName)
    console.log(user)
    console.log(user.uid)

  }
  return (
    <div className='card' onClick={showUser}> {/* temporary*/}
      <div className='thumbnail'>
        <div className="background"></div>
      </div>
      <div className="card-title">
        <h3>Grand Canyon</h3>
      </div>
      <div className="card-info">
        <p><i className="fa-solid fa-eye"></i> 10 views</p>
        <p><i className="fa-solid fa-comment"></i> 2 comments</p>
        <p><i className="fa-solid fa-thumbs-up"></i> 15 likes</p>
      </div>
    </div>
  )
}

export default Card
