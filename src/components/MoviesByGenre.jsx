
// styles
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const MoviesByGenre = ({ moviesByGenre, genreList, genre_id, page , nameOfGenre}) => {

	const imageUrl = 'https://image.tmdb.org/t/p/w500'

    // console.log(genreList.genres.filter(genre => genre.id === genre_id))

  	return (
        <Row>
            <h1>{nameOfGenre}</h1>

            {moviesByGenre.results.map(movie => (
                <Col lg={3} md={4} sm={6} key={movie.id}>
                        
                    <Card className="mb-4">
                        <Card.Img variant="top" src={imageUrl + movie.poster_path}/>
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text className="d-flex justify-content-between">
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

export default MoviesByGenre