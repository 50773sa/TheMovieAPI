import Movies from '../components/Movies'
import useLatestMovies from '../hooks/useLatestMovies'

// styles
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'


const PopularMoviesPage = () => {
    const { data: movies, error, isError, isLoading, isSuccess } = useLatestMovies()
	
  	return (
		<Container className="py-3">
			<h1>Latest Movies</h1>

			{isLoading && (<p className="my-3">Loading Movies...</p>)}

			{isError && (
				<Alert variant="danger">
					<h3>Error!</h3>
					<p>{error.message}</p>
				</Alert>)
			}

			{isSuccess && movies &&  ( 
				<Movies movies={movies} />	
			)}
		</Container> 
	)
}

export default PopularMoviesPage