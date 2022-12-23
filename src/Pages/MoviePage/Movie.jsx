import React, { useEffect, useState } from 'react'
import './movie.scss'
import SingleMovie from '../../components/Movie/SingleMovie'
const Movie = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const options = {method: 'GET'};

        fetch('https://www.omdbapi.com/?s=marvel&apikey=cab45b1c', options)
          .then(response => response.json())
          .then(data => setMovies(data.Search))
          
          .catch(err => console.error(err));
    }, [])
    console.log(movies);
    const myMovies= movies.slice(0,5)
   const secondMovies= movies.slice(5,10)
  return (
    <div className='movie__container'>
        <div className="search">
            <h4>Search</h4>
        <input type="text" />
        </div>
        
        <div className="movie_page">
            <div className="category">
                <h4>
                    MOVIE CATEGORY NAME
                </h4>
                <div className="cont">
                    {
                        myMovies?.map(movie=> (
                            <SingleMovie key={movie.imdbID}
                            title = {movie.Title}
                            image={movie.Poster}
                            />
                        ))
                    }
            
           
                </div>
                
            </div>
            <div style={{marginBottom:"67px"}} className="category">
                <h4>
                    MOVIE CATEGORY NAME
                </h4>
                <div className="cont">
                {
                        secondMovies?.map(movie=> (
                            <SingleMovie key={movie.imdbID}
                            title = {movie.Title}
                            image={movie.Poster}
                            />
                        ))
                    }
                {/* <div className="movie">
                    <h1>Movie Name</h1>
                </div>
                <div className="movie">
                    <h1>Movie Name</h1>
                </div>
                <div className="movie">
                    <h1>Movie Name</h1>
                </div>
                <div className="movie">
                    <h1>Movie Name</h1>
                </div>
                <div className="movie">
                    <h1>Movie Name</h1>
                </div>
                <div className="movie">
                    <h1>Movie Name</h1>
                </div> */}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Movie