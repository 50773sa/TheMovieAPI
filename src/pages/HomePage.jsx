import Movies from '../components/Movies'
import usePopularMovies from '../hooks/usePopularMovies'
// bootstrap
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'



const PopularMoviesPage = () => {
	// import hook with data from TheMovieApi.js(getPopularMovies)
    const { data: movies, error, isError, isLoading, isSuccess } = usePopularMovies()


  	return (
		<Container className="py-3">
			<h2>Popular Movies</h2>

			{isLoading && (<p>Loading Movies...</p>)}

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

export default PopularMoviesPage