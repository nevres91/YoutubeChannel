import React, { useEffect, useState } from 'react'
import legend from '../img/legend2.jpg'


const PartsLegend = () => {


  useEffect(() => {
    const ele = document.querySelector('.image-container');
    if (ele) {
      ele.style.cursor = 'grab';
      let pos = { top: 0, left: 0, x: 0, y: 0 };

      const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
          left: ele.scrollLeft,
          top: ele.scrollTop,
          // Get the current mouse position
          x: e.clientX,
          y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
      };

      const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
      };

      const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      };
      // Attach the handler
      ele.addEventListener('mousedown', mouseDownHandler);

      return () => {
        ele.removeEventListener('mousedown', mouseDownHandler);
      };
    }
  })
  const [isScaled, setIsScaled] = useState(false);
  const handleImageClick = () => {
    setIsScaled(!isScaled);
  };

  return (
    <div className='legend-container'>
      <div className="legend-content">
        <div className="image-container">
          <img
            className={isScaled ? 'legend-image scaled' : 'legend-image'}
            src={legend}
            alt="dirt bike anatomy"
            draggable='false'
          />
        </div>
        <div onClick={handleImageClick} className="x-button">
          <div className={isScaled ? 'button-bg scaled' : 'button-bg'}></div>
        </div>
      </div>
    </div>
  )
}

export default PartsLegend
