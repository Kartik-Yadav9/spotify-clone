import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ReorderIcon from '@mui/icons-material/Reorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import './sidebar.css'; // Import the external CSS

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <div className="menu-item">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="menu-item">
          <SearchIcon />
          <p>Search</p>
        </div>
      </div>

      {/* ------------------------  */}
      <div className="sidebar-bottom">
        <div className="library-header">
          <div className="library-header-left">
            <ReorderIcon />
            <p>Your Library</p>
          </div>
          <div className="library-actions">
            <ArrowForwardIcon />
            <AddIcon />
          </div>
        </div>

        <div className="playlist-card">
          <h1>Create your first playlist</h1>
          <p>It's easy, we will help you</p>
          <button className="playlist-button">Create playlist</button>
        </div>

        <div className="podcast-card">
          <h1>Let's find some podcasts to follow</h1>
          <p>We'll keep you updated on new episodes</p>
          <button className="podcast-button">Browse podcasts</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;































// import React from 'react'
// import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
// import ReorderIcon from '@mui/icons-material/Reorder';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import AddIcon from '@mui/icons-material/Add';

// function Sidebar() {
//   return (
//     <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
//         <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
//             <div className='flex items-center gap-3 pl-8 cursor-pointer'>
//               <HomeIcon/> 
//               <p className='font-bold font-serif'>Home</p>
//             </div>
//             <div className='flex items-center gap-3 pl-8 cursor-pointer'>
//               <SearchIcon/> 
//               <p className='font-bold font-serif'>Search</p>
              
//             </div>
//         </div>


//         {/* ------------------------  */}
//         <div className='bg-[#121212] h-[85%] rounded'>
//             <div className='p-4 flex items-center justify-between'>
//                 <div className='flex items-center gap-3'>
//                     <ReorderIcon/>
//                     <p className='font-semibold'>Your Library</p>
//                 </div>
//                 <div className='flex item-center gap-3'>
//                     <ArrowForwardIcon />
//                     <AddIcon />
//                 </div>
//             </div>
//             <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 '>
//                 <h1>Create your first playlist</h1>
//                 <p className='font-light'>it's easy we will help you</p>
//                 <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create playlist</button>
//             </div>
//             <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
//                 <h1>Lets's find some podcasts to follow</h1>
//                 <p className='font-light'>we'll keep you update on new episodes</p>
//                 <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcasts</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Sidebar