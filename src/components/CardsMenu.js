import React from 'react'

const CardsMenu = () => {
  return (
    <div className='cards-menu'>
      <input type="text" className='search' placeholder='Search:' />
      <button className='search-btn'><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
    </div>
  )
}

export default CardsMenu
