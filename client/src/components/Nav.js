import React, { Component } from 'react';
import './styles/app.css';

const Tab = props => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">{props.title}</a>
    </li>
  )
}

class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <Tab title="Link1" />
        <Tab title="Link2" />
        <Tab title="Link3" />
        <Tab title="Link4" />
      </ul>
    )
  }
}

export default Nav;