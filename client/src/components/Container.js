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
            <h4>Box for Verkkokauppa</h4>
           <ProgressBar progress="70"/>
            <div className="boxWrapper">
                <a href={props.openBox}> 
                    <img className="align-self-center mr-3 boxImg" src="/images/box.png" alt="Box"/>
                    <p>Open me!</p>
                </a>
            </div>
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