import { Link } from 'react-router-dom'

// bootstrap
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const Person = ({ person }) => {

	const imageUrl = 'https://image.tmdb.org/t/p/w500'

  	return (
		<Row>
			<Col lg={6} md={12} sm={12} key={person.id}>
				<Card className="mb-4">
					<Card.Img variant="top" src={person.profile_path !== null ? imageUrl + person.profile_path : ""} />
					<Card.Body>
						<Card.Title>{person.name}</Card.Title>
						<Card.Text>{person.biography}</Card.Text>
						<br />
						
						<Card.Subtitle>Movies</Card.Subtitle>
						<br />
						<>
							{person.credits.cast.map((movies, i) => (
								<div key={i}>
									<Card.Text 
										as={Link}
										to={`/movies/${movies.id}`}
									> 	🎞 {movies.title}
									</Card.Text>
								</div>
							))}
						</>
					</Card.Body>
				</Card>
			</Col>
		</Row>
  	)
}

export default Person