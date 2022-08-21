import { useQuery } from "react-query"
import TheMovieAPI from "../services/TheMovieAPI"


const useLatestMovies = () => {
  return useQuery('latestMovies', TheMovieAPI.getLatestMovies, {keepPreviousData: true})
}
export default useLatestMovies