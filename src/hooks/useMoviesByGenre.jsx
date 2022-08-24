import { useQuery } from "react-query"
import TheMovieAPI from "../services/TheMovieAPI"


const useMoviesByGenre = ({page, genre_id}) => {  
  return useQuery(['moviesByGenre', {page, genre_id}], () => TheMovieAPI.getMoviesByGenre(page, genre_id), {keepPreviousData: true})
}
export default useMoviesByGenre