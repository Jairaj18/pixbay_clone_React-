import React, { useContext } from 'react'
import PixabayContext from './context/PixabayContext'
import Images from './compponents/Images';
import Navbar from './compponents/Navbar';


const App = () => {
  const { imageData } = useContext(PixabayContext); // Get image data from context

  return (
    <div>
      <Navbar/>
      <Images/>
    </div>
  );
}

export default App;
