import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const PixabayState = (props) => {
  const [imageData, setImageData] = useState([]); // Correctly initialize state here
  const [query, setQuery] = useState('london,');
  const api_key = "46082960-3e657b1e0dddb0b33b3d484af";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${api_key}&q=${query}&category&image_type=photo&pretty=true&per_page=100`
        );
        const data = await response.json();
        setImageData(data.hits); // Set the fetched image data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, [query]); 

  const fetchImagesByCategory = async(cat)=>{
    const response = await fetch(
        `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true`
      );
    const data = await response.json();
    setImageData(data.hits);
    console.log(data.hits);
  }



  return (
    <PixabayContext.Provider value={{ imageData, fetchImagesByCategory ,setQuery}}>
      {props.children} {/* Render children inside the Provider */}
    </PixabayContext.Provider>
  );
}

export default PixabayState;
