/**
 * The Movie DB API
 * 
 * API: <https://api.themoviedb.org>
 */

import axios from 'axios'
const BASE_URL = 'https://api.themoviedb.org'
const API_KEY = import.meta.env.VITE_THE_MOVIE_API_KEY


/**
 * Get 
 */

const get = async (endpoint) => {
    const res = await axios.get(BASE_URL + endpoint)

    return res.data
}

/**
 * Get Popular Movies
 */

const getPopularMovies = async () => {

    return get(`/3/movie/popular?api_key=${API_KEY}&page=1?include_adult=false`)

}

/**
 * Get Top Rated Movies
 */

 const getTopRatedMovies = async () => {

    return get(`/3/movie/top_rated?api_key=${API_KEY}&page=1?include_adult=false`)

}

/**
 * Get More Info
 */

 const getReadMore = async (movieId) => {

    return  get(`/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`)
}

/**
 * Get Person
 */

 const getPerson = async (personId) => {

    return  get(`/3/person/${personId}?api_key=${API_KEY}&append_to_response=credits`)
}

// eslint-disable-next-line 
export default {
    getPopularMovies,
    getTopRatedMovies,
    getReadMore,
    getPerson,
}