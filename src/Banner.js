import React, { useState, useEffect } from 'react'
import requests from './requests'
import axios from './axios'

function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
    }
    fetchData()
  }, [])

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
        'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
      )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner_contents'>
        {/* title */}
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        {/* div > 2 bts */}
        {/* description */}
      </div>
    </header>
  )
}

export default Banner
