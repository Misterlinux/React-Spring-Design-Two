import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Task, { useStato, useStatodis } from "./components/Context"
import Dropdown from 'react-bootstrap/Dropdown';

import Home from "./components/Home";
import Primo from './components/Primo';
import Secondo from "./components/Secondo";
import Prof from "./components/Prof";
import Perks from "./components/Perks";
import Stem from "./components/Stem";
import Tech from "./components/Tech";
import Sign from "./components/Sign";

import 'bootstrap/dist/css/bootstrap.css';
import "./Global.scss"
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavbarBrand } from "react-bootstrap";


function App() {


  function Navbarra(){

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
            <Nav className="row mx-0">
              <h4 className="col-3 py-md-0 py-1">lorem</h4>
              <h4 className="col-3 py-md-0 py-1">lorem</h4>
              <h4 className="col-3 py-md-0 py-1">lorem</h4>
              <h4 className="col-3 py-md-0 py-1">lorem</h4>
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
          <Route path="*" element={<Home/>} />
          <Route path="prof/*" element={<Prof/>} />
          <Route path="perks/*" element={<Perks />} />
          <Route path="sign/*" element={<Sign />} />
        </Routes>

      </Router>
      </Task>

    </div>
  );
}

export default App;
