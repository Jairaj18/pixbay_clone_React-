import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'

const Images = () => {
  const { imageData } = useContext(PixabayContext); // Access imageData from context

  return (
    <div className='flex'>
      {imageData.map((image) => (
        <div key={image.id}>
          <div className='item'>
            <img src={image.largeImageURL} alt={image.tags} /> {/* Use correct alt text */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Images;
