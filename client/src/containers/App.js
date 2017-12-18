import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';



class App extends Component {
  render() {
    return (
      <h1>Hello</h1>
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
