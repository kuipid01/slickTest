import React from 'react'
import './sing.scss'
const SingleMovie = ({title,image}) => {
  return (
 
         <div className="movie">
          <img src={image} alt="" />

        <h1>{title.slice(0,12)}</h1>
        <div className="overlay">

        </div>
    </div>
  
  )
}

export default SingleMovie