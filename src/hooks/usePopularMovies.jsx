import { useQuery } from "react-query"
import TheMovieAPI from "../services/TheMovieAPI"


const usePopularMovies = () => {
  return useQuery('popularMovies', TheMovieAPI.getPopularMovies, {keepPreviousData: true})
}
export default usePopularMovies