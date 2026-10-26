// this is the api key for the movie database api
// it is stored in the .env file
// it is used to authenticate the requests to the movie database api
// it is a secret key and should not be shared with anyone
// it is used to authenticate the requests to the movie database api


const API_KEY = import.meta.env.VITE_API_KEY;   

const BASE_URL = 'https://api.themoviedb.org/3';


export const getPopularMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export const searchMovies = async (query: string) => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${
encodeURIComponent(query.trim())
    }`);
    const data = await res.json();
    return data.results;
}
