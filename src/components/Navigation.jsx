import { NavLink } from 'react-router-dom'

// bootstrap
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={NavLink} to="/">MovieTime</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link as={NavLink} end to="/">Home</Nav.Link>
							<Nav.Link as={NavLink} end to="/latest-movies">Latest Movies</Nav.Link>
							<Nav.Link as={NavLink} end to="/top-rated-movies">Top Rated</Nav.Link>
							<Nav.Link as={NavLink} end to="/genres">Genres</Nav.Link>
						</Nav>
					</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
