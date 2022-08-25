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
import { useEffect, useState } from 'react'


const MoviesByGenrePage = () => {
	const [genreTitle, setGenreTitle] = useState("")
	const [searchParams, setSearchParams] = useSearchParams({ 
		genre_id: "",
		page : 1, 
	})

	const genre_id = searchParams.get('genre_id') ? Number(searchParams.get('genre_id')) : ""
	const page = searchParams.get('page') ? Number(searchParams.get('page')) : null


    const { data: moviesByGenre, error, isError, isLoading, isSuccess } = useQuery(['genres', {page, genre_id}], TheMovieAPI.getMoviesByGenre)
    const { data: genreList } = useGenreList()

	// // is genre.id === genre_id (from URL)
	// genreList?.genres?.find(genre => {
    //     if (genre_id === genre.id) {
    //     }
    // })

	console.log(moviesByGenre)
	console.log('GT', genreTitle)

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
					<Dropdown className='mb-2 mt-3 d-flex justify-content-between'>
						<h1>{genreTitle}</h1>

						<Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
							Choose Genre
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