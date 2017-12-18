import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Button from 'react-bootstrap/lib/Button';

// const buttonsInstance = (
//     <Button bsStyle="primary">Primary</Button>
// );

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
      <div className="container-fluid">
      <h1>Hello</h1>
      {this.renderButton()}
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
