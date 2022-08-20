import { useQuery } from "react-query"
import TheMovieAPI from "../services/TheMovieAPI"


const useReadMore = (id) => {
  return useQuery(['readMore', id],() => TheMovieAPI.getReadMore(id), {keepPreviousData: true})
}
export default useReadMore