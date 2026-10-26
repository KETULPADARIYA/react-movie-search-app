import  type { Movie } from '../types/movies';
import MovieCard from '../components/MovieCard';

function Home() {


 const movies: Movie[] = [
    {
        id: 1,
        title: 'The Dark Knight',
        url: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        release_date: '2008-07-18',
    },
    {
        id: 2,
        title: 'The Dark Knight Rises',
        url: 'https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg',
        release_date: '2012-07-20',
    },
    {
        id: 3,
        title: 'Batman Begins',
        url: 'https://image.tmdb.org/t/p/w500/8RW2runSEc34IwKN2D1aPcJd2UL.jpg',
        release_date: '2005-06-15',
    },
    // add matrix movie
    {
        id: 4,
        title: 'The Matrix',
        url: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
        release_date: '1999-03-31',
    },
    {
        id: 5,
        title: 'The Matrix Reloaded',
        url: 'https://image.tmdb.org/t/p/w500/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg',
        release_date: '2003-05-15',
    },
    {
        id: 6,
        title: 'The Matrix Revolutions',
        url: 'https://image.tmdb.org/t/p/w500/qEWiBXJGXK28jGBAm8oFKKTB0WD.jpg',
        release_date: '2003-10-22',
    },
 ]

  
  return (
    <div className="home">
        <div className='movies-grid'>
            {movies.map((movie)=> (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>

  )
}

export default Home;