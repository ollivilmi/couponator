import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles/app.css';
import { BOX_VIEW, STORE_VIEW, COUPON_VIEW, USER_VIEW, OPENING_VIEW } from '../actions/types';
import BoxView from "./views/BoxView";
import StoreView from "./views/StoreView";
import OpeningView from "./views/OpeningView";
import CouponView from "./views/CouponView";
import { UserView } from "./views/UserView";

class Container extends Component {
    render() {
        switch (this.props.view) {
            case BOX_VIEW:
                return <BoxView />
            case STORE_VIEW:
                return <StoreView />
            case COUPON_VIEW:
                return <CouponView />
            case USER_VIEW:
                return <UserView />
            case OPENING_VIEW:
                return <OpeningView />
            default:
                return <p>Internal error</p>
        }
    }
}

Container.propTypes = {
    view: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    view: state.nav.view
});

export default connect(mapStateToProps)(Container);