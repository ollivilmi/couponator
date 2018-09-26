import React, { Component } from 'react';
import Nav from "./Nav";
import Container from "./Container";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return <div>{this.props.navActive ? <Nav/> : ""}<Container/></div>
  }
}

App.propTypes = {
  navActive: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  navActive: state.nav.navActive
});

export default connect(mapStateToProps)(App);