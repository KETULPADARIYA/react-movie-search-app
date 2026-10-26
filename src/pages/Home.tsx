import  type { Movie } from '../types/movies';
import MovieCard from '../components/MovieCard';

function Home() {


 const movies: Movie[] = [
    {
        id: 1,
        title: 'The Dark Knight',
        url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug',
        release_date: '2008-07-18',
    },
    {
        id: 2,
        title: 'The Dark Knight Rises',
        url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug',
        release_date: '2012-07-20',
    },
    {
        id: 3,
        title: 'The Dark Knight',
        url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug',
        release_date: '2008-07-18',
    },
    // add matrix movie
    {
        id: 4,
        title: 'The Matrix',
        url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug',
        release_date: '1999-03-31',
    },
    {
        id: 5,
        title: 'The Matrix Reloaded',
        url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug',
        release_date: '2003-05-15',
    },
    {
        id: 6,
        title: 'The Matrix Revolutions',
        url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug',
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