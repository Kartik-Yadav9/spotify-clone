import { createSlice } from "@reduxjs/toolkit";
import { songsData } from "../assets/assets"; // assuming the correct path

let initialState = {
  track: songsData[0],  // First song as default
  playStatus: false,
  time: {
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 }
  }
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    // songRedux:(state, action)=>{
    //  state.songCointainer = action.payload.songUrl // use the correct and exact payload property
    // },

    setTrack: (state, action) => {               //1
      state.track = action.payload;
    },
    setPlayStatus: (state, action) => {
      state.playStatus = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    play: (state) => {                    //2
      state.playStatus = true;
      console.log('play');
      
    },
    pause: (state) => {                     //2
      state.playStatus = false;
    },
    nextTrack: (state) => {
      const currentIndex = songsData.findIndex(song => song.id === state.track.id);
      state.track = songsData[(currentIndex + 1) % songsData.length];  // Loop through tracks
    },
    prevTrack: (state) => {
      const currentIndex = songsData.findIndex(song => song.id === state.track.id);
      state.track = songsData[(currentIndex - 1 + songsData.length) % songsData.length]; // Loop in reverse
    },

   
  }
});

export default UserSlice.reducer;
export const { setTrack, setPlayStatus, setTime, play, pause, nextTrack, prevTrack } = UserSlice.actions;















































// import { createSlice } from "@reduxjs/toolkit";
// import { useRef } from "react";
// import { songsData } from "../assets/assets";



// let initialState={
//    songCointainer: "",


//    track: songsData[0],
//   playStatus: false,
//   time: {
//     currentTime: {
//       second: 0,
//       minute: 0
//     },
//     totalTime: {
//       second: 0,
//       minute: 0
//     }
//   }
// }


// const UserSlice= createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
      
//         songRedux:(state, action)=>{
//             state.songCointainer = action.payload.songUrl // use the correct and exact payload property
//         },





//         setTrack: (state, action) => {
//             state.track = action.payload;
//           },
//           setPlayStatus: (state, action) => {
//             state.playStatus = action.payload;
//           },
//           setTime: (state, action) => {
//             state.time = action.payload;
//           },
//           play: (state) => {
//             state.playStatus = true;
//           },
//           pause: (state) => {
//             state.playStatus = false;
//           }
// }
// })

// export default UserSlice.reducer
// export const {songRedux, setTrack, setPlayStatus, setTime, play, pause}= UserSlice.actions













