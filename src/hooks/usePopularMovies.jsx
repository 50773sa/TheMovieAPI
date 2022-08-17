import { useQuery } from "react-query"
import TheMovieAPI from "../services/TheMovieAPI"


const usePopularMovies = () => {
  return useQuery('popularMovies', TheMovieAPI.getPopularMovies)
}
export default usePopularMovies