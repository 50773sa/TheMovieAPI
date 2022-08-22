import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={NavLink} to="/">Movies</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/">Home</Nav.Link>
						<Nav.Link as={NavLink} end to="/latest-movies">Latest Movies</Nav.Link>
						<Nav.Link as={NavLink} end to="/popular-movies">Popular Movies</Nav.Link>
						<Nav.Link as={NavLink} end to="/top-rated-movies">Top Rated</Nav.Link>
						<NavDropdown title="Genre" id="navbarScrollingDropdown">
							<NavDropdown.Item as={NavLink} end to="/genre/action" >Action</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/adventure" >Adventure</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/animation" >Animation</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/comedy" >Comedy</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/crime" >Crime</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/documentary" >Documentary</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/drama" >Drama</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/family" >Family</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/fantasy" >Fantasy</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/history" >History</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/horror" >Horror</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/music" >Music</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/mystery" >Mystery</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/romance" >Romance</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/science-fiction" >Science Fiction</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/tv-movie" >TV Movie</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/thriller" >Thriller</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/war" >War</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} end to="/genre/western" >Western</NavDropdown.Item>
						</NavDropdown>


					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
