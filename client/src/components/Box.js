import React, { Component } from 'react';
import './styles/box.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openBox } from '../actions/boxActions';

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

class Box extends Component {
    boxText = amount => {
        if (amount > 0) {
            return <p className="boxText">({amount}) Open</p>
        } else {
            return <p className="boxText">None available</p>
        }
    }

    render() {
        return (
            <div className="row">
                <h4>{this.props.title}</h4>
                <ProgressBar progress={this.props.progress}/>
                <div className="boxWrapper">
                    <a onClick={() => this.props.openBox(this.props)}> 
                        <img className="align-self-center mr-3 boxImg" src="/images/box.png" alt="Box"/>
                        {this.boxText(this.props.amount)}
                    </a>
                </div>
            </div>
        )
    }
}

Box.propTypes = {
    openBox: PropTypes.func.isRequired,
}

export default connect(null, { openBox })(Box);