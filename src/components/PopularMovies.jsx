
// styles
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const PopularMovies = ({ popularMovies}) => {
	
  	return (

		<Row>
		{popularMovies.map(movie => (
			<Col lg={3} md={4} sm={6} key={movie.id}>
					
				<Card className="mb-4">
					{/* <Card.Img variant="top" src={popularMovies.poster_path} /> */}
					<Card.Body>
						<Card.Title>{movie.title}</Card.Title>
						<Card.Text>
							{}
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		))}
		</Row>

  	)
}

export default PopularMovies