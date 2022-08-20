import { useQuery } from "react-query"
import TheMovieAPI from "../services/TheMovieAPI"


const usePerson = (id) => {
  return useQuery(['personDetails', id], () => TheMovieAPI.getPerson(id), {keepPreviousData: true})
}
export default usePerson