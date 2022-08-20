
// styles
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'



const ReadMore = ({ moreInfo }) => {

	const imageUrl = 'https://image.tmdb.org/t/p/w500'
	
  	return (

		<Row>
			<Col lg={6} md={6} sm={6} key={moreInfo.id}>
					
				<Card className="mb-4">
					<Card.Img variant="top" src={imageUrl + moreInfo.poster_path}/>
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
							{moreInfo.credits.cast.map((person, i )=> (
								<div key={i}>
									{/* <Image thumbnail={true} roundedCircle={true} src={imageUrl + actor.profile_path} / > */}
									<Card.Text 
										as={Link} 
										to={`/person/${person.id}`}
									> 	{person.name} as {person.character}
									</Card.Text>{/* //!Byta ut till Card.Link och href?? */}
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