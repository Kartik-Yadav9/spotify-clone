import  { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Episode from './Episode'
import React from 'react'
import {albumsData, songsData} from '../assets/assets'
import SongItem from './SongItem'

function DisplayHome() {



  // const [artists, setArtists] = useState()
  // useEffect(() => {
  //     const ans= async () => {
  //         const response = await axios.get('https://v1.nocodeapi.com/kartikyadav/spotify/qXPSJvVeXHBpDoGz/search?q=artist&type=artist')
  //         // setplaylists(response)
  //         setArtists(response.data.artists.items)

  //     }

  //     ans()

  // }, [])
  // console.log("artists==>",artists);


  // -------------------------------------------artist api end---------------------------------------------

  // const[songs2, setSongs2]= useState()

  // useEffect(()=>{
  //   let song2 = async() => {
  //     let res= await axios.get('https://v1.nocodeapi.com/kartikyadav/spotify/qXPSJvVeXHBpDoGz/search?q=romantic&type=track')
  //   setSongs2(res.data)
  //   }
  //   song2()

  //   console.log(songs2);
  // },[])


  return (
   
       <>
         <Navbar/>
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Artists</h1>

          <div className='flex overflow-auto'>
            {albumsData.map((item, index) => {
              return <Episode key={index} Episodename={item.name} image={item.image}/>         
            })}  
          </div>
        </div>

        
        <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>

          <div className='flex overflow-auto'>
            {songsData.map((item, index)=>(<SongItem key={index} name={item.name} image={item.image} desc={item.desc} songUrl={item.file} id={item.id}/>))}  
          </div>
        </div>

       </>
 
  )
}

export default DisplayHome