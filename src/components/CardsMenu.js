import React from 'react'
import { useDispatch } from 'react-redux'
import { clearVideos } from '../slices/videos';
import { useSearchButton } from "../actions/searchButton";

const CardsMenu = () => {

  const { searchButton } = useSearchButton();
  const button = document.querySelector('.search-btn');
  const submit = (e) => {
    if (e.key === 'Enter') {
      button.click();
    }
  }



  return (
    <div className='cards-menu'>
      <input onKeyDown={submit} type="text" className='search' placeholder='Search:' />
      <button onClick={() => searchButton()} className='search-btn'><i className="fa-solid fa-magnifying-glass fa-xl"></i></button>
    </div>
  )
}

export default CardsMenu 
