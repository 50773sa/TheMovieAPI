import Movies from '../components/Movies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'

// bootstrap
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'


const TopRatedMoviesPage = () => {
    const { data: movies, error, isError, isLoading, isSuccess } = useTopRatedMovies()

  	return (
		<Container className="py-3">
			<h2>Top Rates Movies</h2>

			{isLoading && (<p className="my-3">Loading Movies...</p>)}

			{isError && (
				<Alert variant="danger">
					<h3>Error!</h3>
					<p>{error.message}</p>
				</Alert>)
			}

			{isSuccess &&  ( 
				<Movies movies={movies} />	
			)}


		

		
		</Container> 
	)
}

export default TopRatedMoviesPage