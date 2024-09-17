// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { songRedux } from '../Redux-store/UserSlice'

// function SongItem({name, image, desc, id, songUrl}) {

//   let dispatch= useDispatch()

//   let songdeduxurl= useSelector((state)=>state.user.songContainer)
//   console.log('from song component redux value', songdeduxurl);

//   const sendsong=()=>{
//     dispatch(songRedux({songUrl}))
//     console.log('data sended', {songUrl});
//   }



//   return (
//     <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]' onClick={sendsong}>
//         <img className='rounded' src={image} alt="" />
//         <p className='font-bold mt-2 mb-1'>{name}</p>
//         <p className='text-slate-200 text-sm'>{desc}</p>

//     </div>
//   )
// }

// export default SongItem










import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrack, play } from '../Redux-store/UserSlice'; // Import the correct actions

function SongItem({ name, image, desc, id, songUrl }) {
  const dispatch = useDispatch();

  const handleSongClick = () => {
    // Dispatch the selected song to the Redux store
    dispatch(setTrack({
      id,
      name,
      image,
      desc,
      file: songUrl // Ensure the file path is correctly passed
    }));
    
    // Start playing the selected song
    dispatch(play());
  };

  return (
    <div
      className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'
      onClick={handleSongClick}
    >
      <img className='rounded' src={image} alt={name} />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  );
}

export default SongItem;
