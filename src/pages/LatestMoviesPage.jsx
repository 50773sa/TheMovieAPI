import Movies from '../components/Movies'
import useLatestMovies from '../hooks/useLatestMovies'

//bootstrap
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'


const LatestMovies = () => {
    const { data: movies, error, isError, isLoading, isSuccess } = useLatestMovies()
	
  	return (
		<Container className="py-3">
			<h2>Latest Movies On Theatres</h2>

			{isLoading && (<p>Loading Movies...</p>)}

			{isError && (
				<Alert variant="danger">
					<h3>Error!</h3>
					<p>{error.message}</p>
				</Alert>)
			}

			{isSuccess && ( 
				<Movies movies={movies} />	
			)}
		</Container> 
	)
}

export default LatestMovies