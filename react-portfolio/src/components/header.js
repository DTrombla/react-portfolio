import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import About from "../pages/index"
import Contact from "../pages/contact"
import Portfolio from "../pages/portfolio"
function Header(){
    return(
        <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/Home">Duncan Trombla</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <Nav.Link href="/Home">About Me</Nav.Link>
                <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
                <Nav.Link eventKey={2} href="/Contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/Home">
            <About />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="*">
            <About />
          </Route>
        </Switch>
        </Router>
    )
};

export default Header