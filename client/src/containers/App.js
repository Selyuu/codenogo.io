import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { Button, Navbar, Nav, NavItem, Col } from 'react-bootstrap';
import Octacat from 'react-icons/lib/io/social-octocat';


// const buttonsInstance = (
//     <Button bsStyle="primary">Primary</Button>
// );

const naviBar = (
  <Navbar inverse={false}>
    <div>
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
  <h3>Discover the quirky side of the JavaScript language</h3>
  <div className="input-group input-group-lg">
    <input type="text" className="form-control" placeholder="" />
  </div>
  </div>
)




class App extends Component {

  // constructor(props) {
  //   super(props);
  // }


  // ==================== RENDER

  renderButton() {
    return (
       <Button bsStyle="primary">Primary</Button>
    )
  }

  render() {
    return (
      <div>
        {naviBar}
        <div className="main-body">
          {mainSearch}
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
