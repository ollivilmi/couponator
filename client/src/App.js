import React, { Component } from 'react';
import Nav from "./Nav";
import AddMessage from "./AddMessage";
import Messages from "./Messages";

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <AddMessage/>
        <Messages/>
      </div>
    )
  }
}

export default App;