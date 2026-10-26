import type {Movie} from '../types/movies';
import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/Moviecontext';

type MovieCardProps = {
   movie: Movie;
}

function MovieCard({movie}:MovieCardProps ) {
  const {addFavorite, removeFavorite, isFavorite} = useMovieContext();
  const isFavoriteMovie = isFavorite(movie.id);

  function handleFavorite(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log(isFavoriteMovie);
    if (isFavoriteMovie) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` } alt={movie.title} />
            <div className="movie-overlay">
              <div className="movie-button">
                <button className={`favorite-btn ${isFavoriteMovie ? 'active' : ''}`} onClick={ handleFavorite}>♡</button>
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