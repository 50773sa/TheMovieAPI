import { useQuery } from "react-query"
import TheMovieAPI from "../services/TheMovieAPI"


const useTopRatedMovies = () => {
  return useQuery('topRatedMovies', TheMovieAPI.getTopRatedMovies, {keepPreviousData: true})
}
export default useTopRatedMovies