/**
 * The Movie DB API
 * 
 * API: <https://api.themoviedb.org>
 */

import axios from 'axios'
const BASE_URL = 'https://api.themoviedb.org'
const API_KEY = import.meta.env.VITE_THE_MOVIE_API_KEY


/**
 * Get Popular Movies
 */

const getPopularMovies = async () => {
    const res = await axios.get(`${BASE_URL}/3/movie/popular?api_key=${API_KEY}`)

    return res.data.results
}

// eslint-disable-next-line 
export default {
    getPopularMovies,
}