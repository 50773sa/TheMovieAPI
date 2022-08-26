
// styles
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import Placeholder from 'react-bootstrap/Placeholder';


const Person = ({ person }) => {

	const imageUrl = 'https://image.tmdb.org/t/p/w500'
	console.log(person)

  	return (
		<Row>
			<Col lg={6} md={6} sm={6} key={person.id}>
				<Card className="mb-4">
					<Card.Img variant="left" src={person.profile_path !== null ? imageUrl + person.profile_path : 'https://via.placeholder.com/500' } />
					<Card.Body>
						<Card.Title>{person.name}</Card.Title>
						<Card.Text>{person.biography}</Card.Text>
						<Card.Subtitle>Movies</Card.Subtitle>
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