import type {Movie} from '../types/movies';
import '../css/MovieCard.css';

type MovieCardProps = {
   movie: Movie;
}

function MovieCard({movie}:MovieCardProps ) {


  function handleFavorite(id: number) {
    alert(`Favorite button clicked for movie with id: ${id}`);
    console.log(`Favorite button clicked for movie with id: ${id}`);
  };
  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` } alt={movie.title} />
            <div className="movie-overlay">
              <div className="movie-button">
                <button className='favorite-btn' onClick={() => handleFavorite(movie.id)}>♡</button>
                </div> 
            </div>
        </div> 
      <h1>MovieCard</h1>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard;