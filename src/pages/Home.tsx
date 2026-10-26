import  type { Movie } from '../types/movies';
import MovieCard from '../components/MovieCard';
import '../css/Home.css';
import { useState, useEffect } from 'react';
import { getPopularMovies, searchMovies } from '../api/api';


function Home() {

    const [searchQuery, setSearchQuery] = useState('');

    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    

  // we can use the useState hook to store the movies data in the browser
  // we can use the useEffect hook to fetch the movies data from the server
  // we can use the useEffect hook to update the movies data in the browser
  // we can use the useEffect hook to delete the movies data in the browser
  // we can use the useEffect hook to update the movies data in the browser
  // we can use the useEffect hook to delete the movies data in the browser

//  const movies = await getPopularMovies();
// but this will load the movies data from the server every time somthing change
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if (searchQuery.trim() === '') {
        return;
    }
    if(loading) {
        return;
    }

    const loadPopularMoviesData = async () => {
        try {
            const movies = await searchMovies(searchQuery);
            setLoading(true);
            setMovies(movies);
            setError(null);
        } catch (err) {
            setError('Error fetching popular movies');
            console.log(err);
            // console.error('Error fetching popular movies:', error);
        } finally {
            setLoading(false);
        }
    }
    loadPopularMoviesData();
    // alert(searchQuery);
    // setSearchQuery('');
  };


  useEffect(() => {
    const loadPopularMoviesData = async () => {
        try {
            const movies = await getPopularMovies();
            setLoading(true);
            setMovies(movies);
            setError(null);
        } catch (err) {
            setError('Error fetching popular movies');
            console.log(err);
            // console.error('Error fetching popular movies:', error);
        } finally {
            setLoading(false);
        }
    }
    loadPopularMoviesData();
  }, []);
  

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                 type="text" 
                 placeholder="Search for movies ..."
                  className="search-input"
                  value= {searchQuery}
                  onChange= {(e)=> setSearchQuery(e.target.value)}
                  />
            <button type="submit" className="search-button">Search</button>
        </form>
        {error && <p className='error-message'>{error}</p>}
        { loading ? (<div className='loading'>Loading </div>):
        <div className='movies-grid'>
        {movies.map((movie)=> (
            movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&<MovieCard key={movie.id} movie={movie} />
        ))}
    </div>}
        
    </div>

  )
}

export default Home;