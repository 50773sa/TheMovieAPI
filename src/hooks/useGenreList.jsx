import { useQuery } from "react-query"
import TheMovieAPI from "../services/TheMovieAPI"


const useGenreList = () => {
  // 'genreList' = unique key
  return useQuery('genreList', TheMovieAPI.getGenreList, {keepPreviousData: true})
}
export default useGenreList