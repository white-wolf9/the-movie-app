import React, { useState, useEffect } from 'react';
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import axios from './axios';
import './Row.css'

const baseUrl = "http://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}){
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1,
        }
    };
    
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else{
            movieTrailer(movie?.title || "").then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.error());
        }
    }

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return(
        <div class = "row">
            <h2>{title}</h2>
            <div class = "row_posters">
                {movies.map( movie =>(
                    <img 
                    key = {movie.id}
                    onClick={() => handleClick(movie)}
                    class = {`row_poster ${isLargeRow && "row_posterLarge"}`} 
                    src = {`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt = {movie.name}></img>
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts = {opts}></Youtube>}
        </div>
    )
}

export default Row;