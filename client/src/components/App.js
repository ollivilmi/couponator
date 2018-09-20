import React, { Component } from 'react';
import Nav from "./Nav";
import Container from "./Container";

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Container/>
      </div>
    )
  }
}

export default App;