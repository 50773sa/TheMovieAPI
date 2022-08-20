
// styles
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'



const ReadMore = ({ moreInfo,  }) => {

	const imageUrl = 'https://image.tmdb.org/t/p/w500'
	
  	return (

		<Row>
			<Col lg={6} md={6} sm={6} key={moreInfo.id}>
					
				<Card className="mb-4">
					<Card.Img variant="top" src={imageUrl + moreInfo.poster_path}/>
					<Card.Body>
						<Card.Title>{moreInfo.title}</Card.Title>
						<Card.Text>{moreInfo.overview}</Card.Text>

						<h4>Actors</h4>
						<>
							{moreInfo.credits.cast.map((actor, i )=> (
								<div key={i}>
									<Image thumbnail={true} roundedCircle={true} src={imageUrl + actor.profile_path} / >
									<Card.Text>{ actor.name }</Card.Text>
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