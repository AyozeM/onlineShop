// @flow
import React, { Component } from "react";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import styles from "./About.scss";

class Search extends Component {
  state = {
    searchTerm: ""
  };

  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleSearchTermChange}
          value={this.state.searchTerm}
          placeholder="Searh and try HOT MODULE REPLACEMENT"
        />
        <h2>{this.state.searchTerm}</h2>
      </div>
    );
  }
}

const About = () => (
  <div className={styles.about}>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">React-Bootstrap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Link
    </NavItem>
        <NavItem eventKey={2} href="#">
          Link
    </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
    <h1 className={styles.componenttitle}>React Redux Webpack Boilerplate</h1>
    <p>This is a Full React app workflow </p>
    <p>Try hot module replacement in the next form input</p>
    <p>1) write something</p>
    <p>2) change something in your code</p>
    <p>3) Magic!</p>
    <Search />
  </div>
);

export default About;
