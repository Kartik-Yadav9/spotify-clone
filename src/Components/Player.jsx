import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { play, pause, setTime, nextTrack, prevTrack } from '../Redux-store/UserSlice'; // Adjust the path to your slice
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause'; 
import RepeatIcon from '@mui/icons-material/Repeat';

function Player() {
  const audioRef = useRef(null);
  const seekBar = useRef(null);
  const seekBg = useRef(null);
  const dispatch = useDispatch();

  const { track, playStatus, time } = useSelector((state) => state.user);

  // Effect to update the seek bar based on current time
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = () => {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;

        if (seekBar.current && seekBg.current && duration) {
          // Update the seekBar width
          const percentage = (currentTime / duration) * 100;
          seekBar.current.style.width = `${percentage}%`;

          // Update the time in the Redux store
          dispatch(setTime({
            currentTime: {
              second: Math.floor(currentTime % 60),
              minute: Math.floor(currentTime / 60),
            },
            totalTime: {
              second: Math.floor(duration % 60),
              minute: Math.floor(duration / 60),
            },
          }));
        }
      };
    }
  }, [dispatch]);

  // Handle Play/Pause toggle
  const handlePlayPause = () => {
    if(playStatus){
      audioRef.current.pause()
      dispatch(pause())  
    } else{
      audioRef.current.play()
      dispatch(play())
    }

    console.log('play pause');
    
  };

  // Handle Next and Previous tracks
  const handleNextTrack = () => {
    dispatch(nextTrack());
    audioRef.current.load(); // Load the new track into the audio element

    if (playStatus) {
      audioRef.current.play(); // If the player was playing, continue playing the next track
    }
  };

  const handlePrevTrack = () => {
    dispatch(prevTrack());
    audioRef.current.load(); // Load the new track into the audio element

    if (playStatus) {
      audioRef.current.play(); // If the player was playing, continue playing the previous track
    }
  };

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      {/* Track Info */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt={track.name} />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      {/* Controls and Seek Bar */}
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <ShuffleIcon className="w-4 cursor-pointer" />
          <SkipPreviousIcon className="w-4 cursor-pointer" onClick={handlePrevTrack} />
          {playStatus ? (
            <PauseIcon className="w-4 cursor-pointer" onClick={handlePlayPause} />
          ) : (
            <PlayArrowIcon className="w-4 cursor-pointer" onClick={handlePlayPause} />
          )}
          <SkipNextIcon className="w-4 cursor-pointer" onClick={handleNextTrack} />
          <RepeatIcon className="w-4 cursor-pointer" />
        </div>

        {/* Time and Seek Bar */}
        <div className="flex items-center gap-5">
          <p>{`${time.currentTime.minute}:${time.currentTime.second}`}</p>
          <div ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>{`${time.totalTime.minute}:${time.totalTime.second}`}</p>
        </div>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src={track.file} />
    </div>
  );
}

export default Player;































// import React, { useRef } from 'react'
// import { songsData } from '../assets/assets'
// import ShuffleIcon from '@mui/icons-material/Shuffle';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import RepeatIcon from '@mui/icons-material/Repeat';


// function Player() {


//   return (
//     <div className='h-[10%] bg-black flex justify-between items-center text-white px-4 '>
//         <div className='hidden lg:flex items-center gap-4'>
//             <img className='w-12' src={songsData[0].image} />
//             <div>
//                 <p>{songsData[0].name}</p>
//                 <p>{songsData[0].desc.slice(0,12)}</p>
//             </div>        
//         </div>
//         <div className='flex flex-col items-center gap-1 m-auto'>
//             <div className='flex gap-4'>
//                 <ShuffleIcon className='w-4 cursor-pointer'/>
//                 <SkipPreviousIcon className='w-4 cursor-pointer'/>
//                 <PlayArrowIcon className='w-4 cursor-pointer'/>
//                 <SkipNextIcon className='w-4 cursor-pointer'/>
//                 <RepeatIcon className='w-4 cursor-pointer'/>
//             </div>
//             <div className='flex items-center gap-5'>
//                 <p>1:06</p>
//                 <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer '>
//                     <hr  className='h-1 border-none w-0 bg-green-800 rounded-full'/>
//                 </div>
//                 <p>3:20</p>
//             </div>       
//         </div>
//         <div className='hidden lg-flex items-center gap-2 opacity-75'>
//             <div className='w-20 bg-slate-50 h-1 border-rounded'>
                
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Player










// import React, { useRef, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { play, pause, setTime} from '../Redux-store/UserSlice'// Adjust the path to your slice
// import { songsData } from '../assets/assets';
// import ShuffleIcon from '@mui/icons-material/Shuffle';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause'; // To toggle play/pause
// import RepeatIcon from '@mui/icons-material/Repeat';

// function Player() {
//   const audioRef = useRef(null);
//   const seekBar = useRef(null);
//   const seekBg = useRef(null);
//   const dispatch = useDispatch();

//   const { track, playStatus, time } = useSelector((state) => state.user);

//   // Effect to update the seek bar based on current time
//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.ontimeupdate = () => {
//         const currentTime = audioRef.current.currentTime;
//         const duration = audioRef.current.duration;

//         if (seekBar.current && seekBg.current && duration) {
//           // Update the seekBar width
//           const percentage = (currentTime / duration) * 100;
//           seekBar.current.style.width = `${percentage}%`;

//           // Update the time in the Redux store
//           dispatch(setTime({
//             currentTime: {
//               second: Math.floor(currentTime % 60),
//               minute: Math.floor(currentTime / 60),
//             },
//             totalTime: {
//               second: Math.floor(duration % 60),
//               minute: Math.floor(duration / 60),
//             },
//           }));
//         }
//       };
//     }
//   }, [dispatch]);

//   // Handle Play/Pause toggle
//   const handlePlayPause = () => {
//     if (playStatus) {
//       audioRef.current.pause();
//       dispatch(pause());
//     } else {
//       audioRef.current.play();
//       dispatch(play());
//     }
//   };

//   return (
//     <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
//       {/* Track Info */}
//       <div className="hidden lg:flex items-center gap-4">
//         <img className="w-12" src={track.image} alt={track.name} />
//         <div>
//           <p>{track.name}</p>
//           <p>{track.desc.slice(0, 12)}</p>
//         </div>
//       </div>

//       {/* Controls and Seek Bar */}
//       <div className="flex flex-col items-center gap-1 m-auto">
//         <div className="flex gap-4">
//           <ShuffleIcon className="w-4 cursor-pointer" />
//           <SkipPreviousIcon className="w-4 cursor-pointer" />
//           {playStatus ? (
//             <PauseIcon className="w-4 cursor-pointer" onClick={handlePlayPause} />
//           ) : (
//             <PlayArrowIcon className="w-4 cursor-pointer" onClick={handlePlayPause} />
//           )}
//           <SkipNextIcon className="w-4 cursor-pointer" />
//           <RepeatIcon className="w-4 cursor-pointer" />
//         </div>

//         {/* Time and Seek Bar */}
//         <div className="flex items-center gap-5">
//           <p>{`${time.currentTime.minute}:${time.currentTime.second.toString().padStart(2, '0')}`}</p>
//           <div ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
//             <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
//           </div>
//           <p>{`${time.totalTime.minute}:${time.totalTime.second.toString().padStart(2, '0')}`}</p>
//         </div>
//       </div>

//       {/* Extra Placeholder (if needed) */}
//       <div className="hidden lg-flex items-center gap-2 opacity-75">
//         <div className="w-20 bg-slate-50 h-1 border-rounded"></div>
//       </div>

//       {/* Audio Element */}
//       <audio ref={audioRef} src={track.file}></audio>
//     </div>
//   );
// }

// export default Player;

