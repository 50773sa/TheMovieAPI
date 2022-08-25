import TheMovieAPI from '../services/TheMovieAPI'
import MoviesByGenre from '../components/MoviesByGenre'
// import useMoviesByGenre from '../hooks/useMoviesByGenre'
import useGenreList from '../hooks/useGenreList'
import Pagination from '../components/Pagination'
import { useQuery } from 'react-query'
import { useSearchParams} from 'react-router-dom'

// styles
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'


const MoviesByGenrePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({ 
		genre_id: "",
		page : 1, 
	})
	let nameOfGenre = ""

	const genre_id = searchParams.get('genre_id') 
	const page = searchParams.get('page') ? Number(searchParams.get('page')) : null


    const { data: moviesByGenre, error, isError, isLoading, isSuccess } = useQuery(['genres', {page, genre_id}], TheMovieAPI.getMoviesByGenre)
    const { data: genreList } = useGenreList()


	genreList?.genres?.find(genre => {
        if (Number(genre_id) === genre.id) {
			nameOfGenre = genre.name
        }
    })

	console.log(moviesByGenre)

  	return (
		<Container className="py-3">

			{isLoading && (<p className="my-3">Loading Movies...</p>)}

			{isError && (
				<Alert variant="danger">
					<h3>Error!</h3>
					<p>{error.message}</p>
				</Alert>)
			}

			{genreList &&  (
				<Row>
					<Dropdown className='mb-3 d-flex justify-content-end'>
						<Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
							Choose Genre
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{genreList.genres.map(genre => (
								<Dropdown.Item 
									key={genre.id} 
									onClick={() => {setSearchParams({ 
										genre_id: genre.id, 
										page: 1 ,
									})}}
								> {genre.name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown> 
				</Row>
			)}

			{moviesByGenre && (
				<MoviesByGenre genreList={genreList} moviesByGenre={moviesByGenre} />
			)}

			{page &&(
				<Pagination 
					page={page}
					totalPages={moviesByGenre?.total_pages}
					hasNextPage={page < moviesByGenre?.total_pages}
					hasPreviousPage={page > 1}
					onPreviousPage={() => setSearchParams({ genre_id: genre_id, page: page - 1})}
					onNextPage={() => setSearchParams({ genre_id: genre_id, page: page + 1})}
					/>
			)}		
			
			
		</Container> 
	)
}

export default MoviesByGenrePage