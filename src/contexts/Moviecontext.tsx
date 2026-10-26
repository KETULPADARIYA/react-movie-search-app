import { createContext, useState, useEffect ,useContext} from 'react';
import type { Movie, MovieContextType } from '../types/movies';

export const MovieContext = createContext<MovieContextType>({
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
    isFavorite: () => false,
}); 
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
    // const favoriteMovies = localStorage.getItem('favoriteMovies') || '[]';
    const [favorites, setFavorites] = useState<Movie[]>([]);

    useEffect(() => {
        const favoriteMovies = localStorage.getItem('favoriteMovies') ;
        if (favoriteMovies) {
            setFavorites(JSON.parse(favoriteMovies));
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (movie: Movie) => {
        setFavorites(prev => [...prev, movie]);
    }

    const removeFavorite = (movie: Movie) => {
        setFavorites(favorites.filter((m) => m.id !== movie.id));
    }

    const isFavorite = (movieId: number) => {
        return favorites.some(movie=> movie.id === movieId);
    }
    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
    }

    return <MovieContext.Provider   value={value}>{children}</MovieContext.Provider>;
}