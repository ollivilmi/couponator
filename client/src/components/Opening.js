import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleOpening } from '../actions/boxActions';

const Coupons = props => {
    return props.coupons.map((coupon, index) => {
        return  <li key={index}>
                    <h4>{coupon.store}</h4>
                    <p>{coupon.title}</p>
                </li>
    });
}

class Opening extends Component {

    render() {
        return (
            <div>
                <ul>
                    <Coupons coupons={this.props.coupons} />
                </ul>
                <button onClick={this.props.toggleOpening}>Close</button>
            </div>
        )
    }
}

Opening.propTypes = {
    toggleOpening: PropTypes.func.isRequired,
    isOpening: PropTypes.bool.isRequired,
    coupons: PropTypes.array.isRequired
}
  
const mapStateToProps = state => ({
    isOpening: state.container.opening,
    coupons: state.container.coupons
});

export default connect(mapStateToProps, { toggleOpening })(Opening);
