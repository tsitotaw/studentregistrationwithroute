import { Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './student-icon.png';
import './App.css';
import MainRoute from './components/route/MainRoute';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Student Registration" height="100px;" />
          </Navbar.Brand>
          <div class="flex-container"> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/" > Home </Link> 
              <Link className="nav-link" to="/login" > Login </Link> 
              <NavDropdown title="Student" id="basic-nav-dropdown">
                <Link className="nav-link" to="/students/create" > Create Student </Link>  
                <Link className="nav-link" to="/students" > Student List </Link>  
                <Link className="nav-link" to="/students/edit/:id" > Student Overview </Link>                    
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <div className="content__container">
        <MainRoute />
      </div>
      
    </>
  );
}

export default App;

/**
 * we need to define the routes
 *
 */
