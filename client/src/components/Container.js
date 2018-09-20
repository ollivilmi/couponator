import React, { Component } from 'react';
import './styles/app.css';

const ProgressBar = props => {
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow={props.progress}
                aria-valuemin="0" aria-valuemax="100" style={{width:props.progress + "%"}}>
                    {props.progress}
            </div>
        </div>
    )
}

const Row = props => {
    return (
        <div className="row">
            <h4>Box for store</h4>
            <a href={props.openBox}>
                <img className="align-self-center mr-3 boxImg" src="/images/box.png" alt="Box"/>
           </a>
           <ProgressBar progress="70"/>
        </div>
    )
}


class Container extends Component {
  render() {
    return (
      <div className="container">
        <Row/>
        <Row/>
        <Row/>
        <Row/>
      </div>
    )
  }
}

export default Container;