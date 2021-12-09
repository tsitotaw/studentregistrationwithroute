import { Card, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './student-icon.png';
import './App.css';
import MainRoute from './components/route/MainRoute';
import { Link } from 'react-router-dom';

function App() {

  const onLogoutHandler = (event) => {
    localStorage.removeItem("IsLoggedIn");
    window.location.href = '/';
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Student Registration" height="100px;" /> Student App
          </Navbar.Brand>
          <div class="flex-container"> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/" > Student List </Link> 
              <Link className="nav-link" to="/students/create" > Create Student </Link>   
              <NavDropdown title="Logout" id="basic-nav-dropdown">
                <Nav.Link href="" onClick={onLogoutHandler}>Logout</Nav.Link>                   
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
