import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Octacat from 'react-icons/lib/io/social-octocat';
import { PrismCode } from 'react-prism';
require('prismjs');
require('prismjs/themes/prism.css');

const naviBar = (
  <Navbar inverse={false}>
    <div className="navigation-bar">
      <div>
      <Navbar.Header>
        <Navbar.Brand>
            <a href="https://codenogo.io"><Octacat className="nav-icon"/>
            <span className="icon-title">Code no go</span></a>
        </Navbar.Brand>
      </Navbar.Header>
      </div>
      <div className="nav-links">
      <Nav pullRight>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Contribute</NavItem>
      </Nav>
      </div>
    </div>
  </Navbar>
)

const mainSearch = (
  <div className="container search-div">
  <h1>JavaScript code no go</h1>
  <h4>Discover the quirky side of the JavaScript language</h4>
  <div className="input-group input-group-lg search-bar-div">
    <input type="text" className="form-control search-bar-1" placeholder="&#xf002;" disabled />
    <input type="text" className="form-control search-bar-2" placeholder="JavaScript, wat?" />
  </div>
  </div>
)

const cards = (
  <div className="container code-snips">


    <div className="cards">
      <h3>Minimal value is greater than zero</h3>
      <p>Last updated Dec 19, 2017</p>
      <div>
      <PrismCode component="pre" className="language-javascript">Number.MIN_VALUE > 0 // -> true</PrismCode>
      </div>
    </div>

  </div>
)

const footer = (
  <div className="footer">

  </div>
)



class App extends Component {

  // constructor(props) {
  //   super(props);
  // }


  // ==================== RENDER

  render() {
    return (
      <div>
        {naviBar}
        <div className="main-body">
          {mainSearch}
          {cards}
          {footer}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  // addEvents: (events) => dispatch({
  //   type: 'ADD_EVENTS',
  //   events,
  // }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
