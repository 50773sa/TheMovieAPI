import Movies from '../components/Movies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'


// styles
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'



const TopRatedMoviesPage = () => {
    const { data: movies, error, isError, isLoading, isSuccess } = useTopRatedMovies()

  	return (
		<Container className="py-3">
			<h1>Top Rates Movies</h1>

			{isLoading && (<p className="my-3">Loading Movies...</p>)}

			{isError && (
				<Alert variant="danger">
					<h3>Error!</h3>
					<p>{error.message}</p>
				</Alert>)
			}
				{movies &&  ( 
					<Movies movies={movies} />	
				)}


		

		
		</Container> 
	)
}

export default TopRatedMoviesPage