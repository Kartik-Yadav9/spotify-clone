// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import DisplayHome from './DisplayHome'

// function Display() {
//   return (
//     <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
//      <Routes>
//         <Route path= "/" element={<DisplayHome/>} />    
//     </Routes>   
//     </div>
//   )
// }

// export default Display

















import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import './display.css'; // Import the external CSS

function Display() {
  return (
    <div className="display-container">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
      </Routes>
    </div>
  );
}

export default Display;
