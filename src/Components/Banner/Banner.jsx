import React, { useEffect, useState } from 'react'

import './Banner.css'
import axios from '../../axios'
import { imageUrl } from '../../constants/constants'
import fetchVideo, {fetchTrending} from '../../urls'
import createNotification from '../../notification'
import { NotificationContainer } from 'react-notifications'
function Banner() {

  
  const [movie,setMovie]=useState({})
  useEffect(()=>{
    let randomNum=Math.floor(Math.random()*20)
    // console.log(randomNum);
    axios.get(fetchTrending).then((response)=>{
      // console.log(response.data.results[randomNum]);
      setMovie(response.data.results[randomNum])
      
    }).catch(err=>{
      console.log(err);
    })
  },[])
  const handlePlayBtn= ()=>{
    // console.log(movie.id);
    axios.get(fetchVideo(movie.id)).then((response)=>{
      // console.log(response);
 
    if(response.data.results)  window.location.href='https://www.youtube.com/watch?v='+response.data.results[0].key
    }).catch(err=>{
      createNotification('error','Something went wrong!')
    })
  }
  return (
    <div className='banner' style={{backgroundImage:`url(${imageUrl}${movie.backdrop_path})`}}>
        <div className="fadeTop"></div>
        <h1 className='movieTitle'>{movie.title}</h1>
        <p className='description'>{movie.overview}</p>
        <div className='bannerButtons'>
            <button onClick={handlePlayBtn} className='playButton Button'><span className="material-symbols-outlined playIcon">play_arrow</span>Play</button>
            <button className='moreInfoButton Button'><span className="material-symbols-outlined infoIcon">info</span>More Info</button>
            <div className="fadeBottom"></div>
        </div>
        <NotificationContainer/>
    </div>
  )
}

export default Banner