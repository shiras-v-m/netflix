import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'
import fetchVideo from '../../urls'
import YouTube, { YouTubeProps } from 'react-youtube';
import createNotification from '../../notification'
import { NotificationContainer } from 'react-notifications'
function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [youtubeVideoId,setYoutubeVideoId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{

      setMovies(response.data.results)
    }).catch(err=>{
      console.log(err);
      createNotification('error','something went wrong')
      
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMoviePosterClick= (id)=>{

    axios.get(fetchVideo(id)).then((response)=>{
      // console.log(response);
      response.data.results ? setYoutubeVideoId(response.data.results[0].key) : setYoutubeVideoId('')
      // window.location.href='https://www.youtube.com/watch?v='+response.data.results[0].key
     
    }).catch((err)=>{
      if(err){
        createNotification('warning','No trailer found for this movie!')
        setYoutubeVideoId('')
      }
    })

  
  }
  const closeYoutbe=()=>{
    setYoutubeVideoId('')
  }
  return (
    <div className='Posters'>
    <h2 className='heading'>{props.title}</h2>
    <div className='rowPosts'>
      {
        movies?.map((obj,index)=>(
          <img onClick={()=>handleMoviePosterClick(obj.id)} key={index} className={props.isSmall? 'isSmallPoster' :'posterImage'} src={imageUrl+obj.poster_path} alt="poster" />
        ))
      }
    </div>
    
   {youtubeVideoId &&  <div className='youtubeContainer'> 

 <button className='closeBtn' onClick={closeYoutbe}><span className="material-symbols-outlined">cancel</span></button><YouTube className='youtubeScreen' videoId={youtubeVideoId} opts={opts}  />
   </div>} 
   <NotificationContainer/>
    </div>
  )
}

export default RowPost