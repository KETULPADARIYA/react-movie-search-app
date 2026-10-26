import {z} from 'zod';

export const movieSchema = z.object({
    id: z.number().min(0).max(1000000000),
    title: z.string(),
    url: z.string().nullable,
    release_date: z.string(),
    poster_path: z.string(),
});


// type Movie = {
//     id: number;
//     title: string;
//     url: string;
//     release_date: string;
//     poster_path: string;
// }
export type MovieContextType = {
    favorites: Movie[]
    addFavorite: (movie: Movie) => void
    removeFavorite: (movie: Movie) => void
    isFavorite: (movieId: number) => boolean
  };

export type Movie= z.infer<typeof movieSchema>;
