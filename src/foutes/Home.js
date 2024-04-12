import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() =>{
    // 김밥버전
    const json = await ( await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")).json();
    setMovies(json.data.movies)
    setLoading(false);
  }
  useEffect(()=>{
    getMovies();
  },[]);
  return (
      <div>
        <button><Link to='/hello1'>gotoDrag1</Link></button>
        <button><Link to='/hello2'>gotoDrag2</Link></button>
        {loading ? <h1>Loading...</h1> : null}
        {movies.map((movie)=> 
        <Movie 
        key={movie.id}
        id={movie.id}
        coverImg={movie.medium_cover_image} 
        title={movie.title} 
        summary={movie.summary} 
        genres={movie.genres} 
        />)}
      </div>
    );
}

export default Home;
