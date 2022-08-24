import TheMovieAPI from '../services/TheMovieAPI'
import MoviesByGenre from '../components/MoviesByGenre'
// import useMoviesByGenre from '../hooks/useMoviesByGenre'
import useGenreList from '../hooks/useGenreList'
import { useQuery } from 'react-query'
import { useSearchParams} from 'react-router-dom'

// styles
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react'


const MoviesByGenrePage = () => {
	const [nameOfGenre, setNameOfGenre] = useState()
	const [searchParams, setSearchParams] = useSearchParams({ 
		genre_id: "",
		page : 1, 
	})

	const genre_id = searchParams.get('genre_id') 
	const page = searchParams.get('page') // ? Number(searchParams.get('page')) : null


    const { data: moviesByGenre, error, isError, isLoading, isSuccess } = useQuery(['genres', {page, genre_id}], TheMovieAPI.getMoviesByGenre)
    const { data: genreList } = useGenreList()

	console.log('From page - genreList: ', genreList)

	genreList?.genres?.find(genre => {
        if (Number(genre_id) === genre.id) {
			setNameOfGenre(genre.name)

        }

		console.log('Compare id:', genre_id , genre.id)

    })

console.log(nameOfGenre)
	
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
					<Dropdown>
						<Dropdown.Toggle variant="primary" id="dropdown-basic">
							genre
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
		</Container> 
	)
}

export default MoviesByGenrePage