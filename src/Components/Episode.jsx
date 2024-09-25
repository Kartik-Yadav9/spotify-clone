// import React from 'react'

// function Episode({Episodename, image}) {

//   return (
//     <>
//           <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
//               <img className='rounded w-48 ' src={image} alt="" />
          
//               <p className='font-bold mt-2 mb-1 text-sm'>{Episodename}</p>


//           </div>
//     </>
//   )
// }

// export default Episode





























import React from 'react';
import './episode.css'; // Import the external CSS

function Episode({ Episodename, image }) {
  return (
    <div className="episode-container">
      <img className="episode-image" src={image} alt={Episodename} />
      <p className="episode-name">{Episodename}</p>
    </div>
  );
}

export default Episode;
