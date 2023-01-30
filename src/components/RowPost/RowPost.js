import React from 'react'
import './RowPost.css'
import { useEffect,useState } from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'

const RowPost = (props) => {
  const[movies,setmovies]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
   axios.get(props.url).then(response=>{
console.log(response.data,"data")
setmovies(response.data.results)
   }).catch(err=>{
    console.log(err)
   }) 
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay:0
    },
  };
  const movieClick =(id)=>{
    // console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data)
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('No Trailer available')
      }
     
    })

  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img onClick={()=>movieClick(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />            

          )}
            </div>

    { urlId &&  <YouTube opts={opts} videoId={urlId.key}/>  }    

    </div>
  )
}

export default RowPost