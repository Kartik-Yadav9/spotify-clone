// import React from 'react'
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

// function Navbar() {
//   return (

//     <>
//         <div className='w-full flex justify-between items-center font-semibold'>
//             <div className='flex items-center gap-2 '>
//                 <ArrowCircleLeftIcon className='cursor-pointer'/>
//                 <ArrowCircleRightIcon className='cursor-pointer'/>
//             </div>
//             <div className='flex items-center gap-4'>
//                 <p className='bg-white text-black text-[15px] px-4 py-1 rounded-full hidden md:block cursor-pointer'>Explore Premium</p>
//                 <p className='bg-black py-1 px-3 rounded-full text-[15px] cursor-pointer'>Install App</p>
//                 <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>K</p>
//             </div>
//         </div>
//         <div className='flex items-center gap-2 mt-4'>
//             <p className='bg-white text-black px-4  cursor-pointer rounded-full py-1'>All</p>
//             <p className='text-white bg-black px-4 cursor-pointer py-1 rounded-full'>Music</p>
//             <p className='text-white bg-black px-4 cursor-pointer py-1 rounded-full'>Podcast</p>
//         </div>
//     </>
//   )
// }

// export default Navbar
















import React from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './Navbar.css'; // Import the external CSS

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="icon-container">
          <ArrowCircleLeftIcon className="cursor-pointer" />
          <ArrowCircleRightIcon className="cursor-pointer" />
        </div>
        <div className="nav-items">
          <p className="explore-btn">Explore Premium</p>
          <p className="install-btn">Install App</p>
          <p className="profile-btn">K</p>
        </div>
      </div>

      <div className="category-container">
        <p className="category-btn all-btn">All</p>
        <p className="category-btn music-btn">Music</p>
        <p className="category-btn podcast-btn">Podcast</p>
      </div>
    </>
  );
}

export default Navbar;

























