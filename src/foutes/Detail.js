import { useState } from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {useParams} from 'react-router-dom'

function Detail(){
  const {id} = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const response = async ()=>{
    const json = await( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovieDetail(json.data.movie);
  }

  useState(()=>{
    response();
    setLoading(false);
  }, [])

  return (
  <div>
    <h1>Detail</h1>
    {loading ? <h1>Loading...</h1> : <div><h2>{movieDetail.title}</h2>
    <img src={movieDetail.large_cover_image}/></div>}
  </div>)
}

export default Detail;  