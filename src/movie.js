import React from "react";
import propTypes from "prop-types";

function Movie ({id, year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="genres">{genres.map((genres, index) => ( 
                <li key={index}className="genres__genre">{genres}</li>))}</ul>
                <p className="movie__summary">{summary.slice(0, 140)}...</p>
                <div className="Daeyal"></div>




            </div>
        </div>
    );
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    year : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired
  
};

export default Movie;