import React, { useEffect } from "react";
const Movie1 = () => {
    useEffect(() =>{
        fetch('https://api.themoviedb.org/3/movie/526896?api_key=d4a8045464e5c17496ef776ab07cea1a')
        .then(response => {
            console.log('Movie-1-response', response)
        })
    },[])
    return <div>Movie 1</div>
}

export default Movie1;