import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Stores from "./components/Stores";
import { fetchCouponsForStore } from '../../actions/storeActions';
import { toggleNav } from '../../actions/viewActions';
import { Coupons } from "./components/Coupons";

class StoreView extends Component {
    render() {
        return (
            <div className="container">
                {
                    // Add more props to Stores -> description etc.
                    this.props.navActive ? 
                    <Stores clickHandler={this.props.fetchCouponsForStore}/> : 
                    <Coupons coupons={this.props.coupons} return={this.props.toggleNav}/>
                }
            </div>
        )
    }
}

StoreView.propTypes = {
    fetchCouponsForStore: PropTypes.func.isRequired,
    toggleNav: PropTypes.func.isRequired,
    coupons: PropTypes.array
}

const mapStateToProps = state => ({
    coupons: state.storeView.coupons,
    navActive: state.nav.navActive
});

export default connect(mapStateToProps, { fetchCouponsForStore, toggleNav })(StoreView);