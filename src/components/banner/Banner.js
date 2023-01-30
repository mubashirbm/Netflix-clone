// import { cleanup } from '@testing-library/react'
import { API_KEY,imageUrl } from '../../constants/constants'
import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'

const Banner = () => {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const random=  getRandomInt(20)

 const[movie,setMovie]=useState()

 useEffect(() => {   
 
  axios.get(`trending/movie/day?api_key=${API_KEY}`).then((Response)=>{
    console.log(Response.data.results)
    console.log(Response.data.results[random])
    setMovie(Response.data.results[random])
  })
 }, [])
 
  return (
   
    <div className='banner'
    style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path : " "})`}}>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title :""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade">
                
            </div>
            </div>
  

  )
}

export default Banner