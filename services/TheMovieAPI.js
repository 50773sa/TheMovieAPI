/**
 * The Movie DB API
 * 
 * API: <https://api.themoviedb.org/>
 */

import axios from 'axios'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'api_key=9ab89d085c74b7eb41d88a6ba18ec56a'


/**
 * Get All Films
 */

const getLatestFilms = async (page) => {
    const res = await axios.get(`${BASE_URL}/movie/latest?${API_KEY}`)
    console.log(res)
}

// eslint-disable-next-line 
export default {
    getLatestFilms,
}