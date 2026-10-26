import '../css/Favorites.css';
import { useMovieContext } from '../contexts/Moviecontext';
import MovieCard from '../components/MovieCard';

function Favorites() {
    const {favorites} = useMovieContext();
    if (favorites.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>No favorites yet</h2>
                <p>Start adding your favorite movies to your list and they will appear here!</p>
            </div>
        )
    }
    return (
        <div className="favorites">
            <h2>Favorites</h2>
            <div className="favorites-grid">
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Favorites;