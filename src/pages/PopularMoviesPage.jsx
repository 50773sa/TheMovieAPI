import PopularMovies from '../components/PopularMovies'
import usePopularMovies from '../hooks/usePopularMovies'


// styles
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const PopularMoviesPage = () => {
    const { data: popularMovies, error, isError, isLoading, isSuccess } = usePopularMovies()

	console.log('POPULAR MOVIES: ', popularMovies)

  	return (
		<Container className="py-3">
			<h1>Popular Movies</h1>

			{isLoading && (<p className="my-3">Loading Movies...</p>)}

			{isError && (
				<Alert variant="danger">
					<h3>Error!</h3>
					<p>{error.message}</p>
				</Alert>)
			}
				{popularMovies &&  ( 
					<PopularMovies popularMovies={popularMovies} />	
				)}


		

		
		</Container> 
	)
}

export default PopularMoviesPage