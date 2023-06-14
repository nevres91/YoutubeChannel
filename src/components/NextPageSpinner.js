import React from 'react'
import spinner2 from '../img/spinner2.gif'

const NextPageSpinner = () => {
  return (
    // <div className='next-page-spinner'>
    //   <img src={spinner2} alt='Loading...' />
    // </div>
    <div className="loader">
      <div className="loader-inner">
        <div className="loader-block"></div>
        <div className="loader-block"></div>
        <div className="loader-block"></div>
        <div className="loader-block"></div>
        <div className="loader-block"></div>
        <div className="loader-block"></div>
        <div className="loader-block"></div>
        <div className="loader-block"></div>
      </div>
    </div>

  )
}

export default NextPageSpinner
