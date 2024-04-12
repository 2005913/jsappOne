import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import styles from "../css/Home.module.css"

function Movie({id, title, coverImg, summary, genres}){
  
  // 그냥 링크 넣을 경우 무조건 브라우저 새로고침
  // 리-라링크 사용하면 새로고침 안함
  return <div>
    <h1><Link to={`/movie/${id}`}>{title}</Link></h1>
    <br/>
      <img className={styles.mediImg} src={coverImg} alt={title}/><p>{summary}</p>
    <ul>
      {genres.map((g, i)=><li key={i}>{g}</li>)}
    </ul>
    </div>;
};

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string)
};

export default Movie