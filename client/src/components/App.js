import React, { Component } from 'react';
import Nav from "./Nav";
import Container from "./Container";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Opening from "./Opening";

class App extends Component {
  render() {
    return this.props.isOpening ? <Opening/> : <div><Nav/><Container/></div>
  }
}

App.propTypes = {
  isOpening: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isOpening: state.container.opening
});

export default connect(mapStateToProps)(App);