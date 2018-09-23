import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleOpening, resetCoupons } from '../actions/boxActions';

const Coupon = props => {
    return (
            <button className="coupon">
                <div>
                    <h4>{props.store}</h4>
                    <p>{props.title}</p>
                </div>
            </button>
    )
}

class Opening extends Component {
    render() {
        return (
            <div>
                {
                this.props.coupons.map((coupon, index) => {
                    return <Coupon key={coupon.id} store={coupon.store} title={coupon.title} />
                })
                }
                <button onClick={() => {
                    this.props.toggleOpening();
                    this.props.resetCoupons();
                }}>Close</button>
            </div>
        )
    }
}

Opening.propTypes = {
    toggleOpening: PropTypes.func.isRequired,
    resetCoupons: PropTypes.func.isRequired,
    isOpening: PropTypes.bool.isRequired,
    coupons: PropTypes.array.isRequired
}
  
const mapStateToProps = state => ({
    isOpening: state.container.opening,
    coupons: state.container.coupons
});

export default connect(mapStateToProps, { toggleOpening, resetCoupons })(Opening);
