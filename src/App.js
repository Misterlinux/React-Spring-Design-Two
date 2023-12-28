import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Task, { useStato, useStatodis } from "./components/Context"

import Home from "./components/Home";
import Prof from "./components/Prof";
import Perks from "./components/Perks";
import Courses from "./components/Courses";

import Gallery from "./components/Gallery";
import Sign from "./components/Sign";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.css';
import "./Global.scss"
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {


  function Navbarra(){
    
    const location = useLocation().pathname.split("/")[1]

    return(
      <div className="d-flex bg-primary justify-content-center">
        <div className="row mx-0 col-12 col-md-11">

        <Navbar className="text-success" bg="primary" expand="md">
          <Container fluid className="d-flex justify-content-between">
            
            <Link to="">
              <Navbar.Brand className="text-success hammer fs-1">
                  AccaDem
              </Navbar.Brand>
            </Link>

            <Navbar.Toggle className="text-primary" aria-controls="" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav className="mx-0 navlist">
                <Link to="prof">
                  <h5 className="hammer py-md-0 py-1">Teachers</h5>
                </Link>
                <Link to="perks">
                  <h5 className="hammer py-md-0 py-1">Perks</h5>                
                </Link>
                <Link to={location == "stem" ? "tech" : "stem"}>
                  <h5 className="hammer py-md-0 py-1">Courses</h5>
                </Link>
                <Link to="sign">
                  <h5 className="hammer py-md-0 py-1">Sign-In</h5>
                </Link>
              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>

        </div>
      </div>
    )
  }

  return (
    <div>

      <Task>
      <Router>

        <Navbarra />
        <Routes>
          <Route path="/*" element={<Home/>} />
          <Route path="prof/*" element={<Prof/>} />
          <Route path="perks/*" element={<Perks/>} />
          <Route path="stem/*" element={<Courses/>} />
          <Route path="tech/*" element={<Courses/>} />
          <Route path="gallery/*" element={<Gallery />} />
          <Route path="sign/*" element={<Sign/>} />
        </Routes>
        <Footer />

      </Router>
      </Task>

    </div>
  );
}

export default App;
