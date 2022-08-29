import TheMovieAPI from '../services/TheMovieAPI'
import MoviesByGenre from '../components/MoviesByGenre'
import useGenreList from '../hooks/useGenreList'
import Pagination from '../components/Pagination'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams} from 'react-router-dom'

// bootstrap
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'


const MoviesByGenrePage = () => {
	const [genreTitle, setGenreTitle] = useState("")
	const [searchParams, setSearchParams] = useSearchParams({ 
		genre_id: "",
		page : 1, 
	})

	/**
	 * GET genre_id & page
	 */

	const genre_id = searchParams.get('genre_id') // genre_id and page will return as a string unless we convert it to a number
		? Number(searchParams.get('genre_id')) 
		: ""

	const page = searchParams.get('page') 
		? Number(searchParams.get('page')) 
		: null


	/**
	 *  Hooks with data from API
	 */

    const { data: moviesByGenre, error,  isError,  isLoading, isSuccess } = useQuery(['genres', {page, genre_id}], TheMovieAPI.getMoviesByGenre, {keepPreviousData: true})
    const { data: genreList } = useGenreList()


  	return (
		<Container className="py-3">

			{isLoading && (<p>Loading Movies...</p>)}

			{isError && (
				<Alert variant="danger">
					<h3>Error!</h3>
					<p>{error.message}</p>
				</Alert>)
			}

			{genreList &&  (
				<Row>
					<Dropdown className='mb-2 mt-3 d-flex justify-content-between'>
						<h2>{genreTitle}</h2>

						<Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
							genres 
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{genreList.genres.map(genre => (
								<Dropdown.Item 
									key={genre.id} 
									onClick={() => {
										setSearchParams({ 
											genre_id: genre.id, 
											page: 1 ,
										})
										setGenreTitle(genre.name)
									}}
								> {genre.name}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown> 
				</Row>
			)}

			{isSuccess && (
				<>
					<MoviesByGenre moviesByGenre={moviesByGenre} />
				
					<Pagination 
						page={page}
						totalPages={moviesByGenre?.total_pages}
						hasNextPage={page < moviesByGenre?.total_pages}
						hasPreviousPage={page > 1}
						onPreviousPage={() => setSearchParams({ genre_id: genre_id, page: page - 1})}
						onNextPage={() => setSearchParams({ genre_id: genre_id, page: page + 1})}
					/>
				</>
			)}
			
		</Container> 
	)
}

export default MoviesByGenrePage