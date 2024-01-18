import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from './logo.png';
import { red } from '@mui/material/colors';
import {Link} from 'react-scroll';
function NavScrollExample() {
  return (
    <>
    <Navbar expand="lg" style={{fontFamily:"Roboto"}} className="bg-body-tertiary ml-auto" Navbar bg="light" data-bs-theme="light">
      <Container fluid>
      <img src={img} style={{height:"75px"}}/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        </Nav>
        <Nav.Link> <Link to="exercise" smooth={true} style={{color:"red"}}>Exercises</Link></Nav.Link>
        <Nav.Link href="./Trainwithus" style={{color:"red"}}>Trainers</Nav.Link>
        <Nav.Link href="./BodyFatCalculator" style={{color:"red"}}>Body Fat Calculator</Nav.Link>
        <Nav.Link href="./Subscription" style={{color:"red"}}>Subscription</Nav.Link>
            <Nav.Link href="./Franchise" style={{color:"red"}}>Franchise</Nav.Link>
            <div className="d-flex ml-auto">
            <Nav.Link href="./signin" style={{color:"red"}}>Login</Nav.Link>
            <Nav.Link href="./signup" style={{color:"red"}}>Signup</Nav.Link>
            </div>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
}

export default NavScrollExample;