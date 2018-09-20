import React, { Component } from 'react';
import './styles/app.css';

const Tab = props => {
  return (
    <li className="nav-item">
      <a className={props.active} href="#">{props.title}</a>
    </li>
  )
}

class Nav extends Component {
  render() {
    return (
      <ul className="nav nav-pills nav-fill">
        <Tab active="nav-link active" title="Link1" />
        <Tab active="nav-link" title="Link2" />
        <Tab active="nav-link" title="Link3" />
        <Tab active="nav-link" title="Link4" />
      </ul>
    )
  }
}

export default Nav;