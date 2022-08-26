import { Link } from 'react-router-dom'
// bootstrap
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



const ReadMore = ({ moreInfo }) => {

	const imageUrl = 'https://image.tmdb.org/t/p/w500'


  	return (

		<Row>
			<Col lg={12} md={12} sm={12} key={moreInfo.id}>
					
				<Card className="mb-4">
					<Card.Img variant="top" src={moreInfo.poster_path ? imageUrl + moreInfo.poster_path : ""}/>
					<Card.Body>
						<Card.Title>{moreInfo.title}</Card.Title>
						<Card.Text>{moreInfo.tagline}</Card.Text>
						<Card.Text>{moreInfo.overview}</Card.Text>
						<Card.Subtitle className="d-flex justify-content-between">
							<p>Rating</p> 
							⭐️ {moreInfo.vote_average}
						</Card.Subtitle>

						<Card.Subtitle>Actors</Card.Subtitle>
						<>
							{moreInfo.credits.cast.map((person, i ) => (
								<div key={i}>
									<Card.Text 
										as={Link} 
										to={`/person/${person.id}`}
									> 	{person.name} as {person.character}
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

export default ReadMore