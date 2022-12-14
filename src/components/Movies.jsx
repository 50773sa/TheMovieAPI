import { Link } from 'react-router-dom'

// bootstrap
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const Movies = ({ movies }) => {

	const imageUrl = 'https://image.tmdb.org/t/p/w500'
	
  	return (

		<Row>
			{movies.results.map(movie => (
				<Col lg={3} md={4} sm={6} key={movie.id}>
						
					<Card className="mb-4">
						<Card.Img variant="top" src={movie.poster_path !== null ? imageUrl + movie.poster_path : ""}/>
						<Card.Body>
							<Card.Title>{movie.title}</Card.Title>
							<Card.Text className="d-flex justify-content-between">
								⭐️ {movie.vote_average}
								<Button 
									as={Link} 
									to={`/movies/${movie.id}`} 
									variant="primary"
									> Read more
								</Button>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
  	)
}

export default Movies