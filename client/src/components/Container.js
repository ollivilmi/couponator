import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBoxes } from '../actions/boxActions';

import './styles/app.css';
import { BOX_VIEW, STORE_VIEW, COUPON_VIEW, USER_VIEW } from '../actions/types';
import { BoxView } from "./views/BoxView";
import { StoreView } from "./views/StoreView";
import { CouponView } from "./views/CouponView";
import { UserView } from "./views/UserView";

class Container extends Component {
    componentWillMount() {
        this.props.fetchBoxes();
    }

    render() {
        switch (this.props.view) {
            case BOX_VIEW:
                return <BoxView boxes={this.props.boxes} />
            case STORE_VIEW:
                return <StoreView />
            case COUPON_VIEW:
                return <CouponView />
            case USER_VIEW:
                return <UserView />
            default:
                return <p>Internal error</p>
        }
    }
}

Container.propTypes = {
    fetchBoxes: PropTypes.func.isRequired,
    boxes: PropTypes.array.isRequired,
    view: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    boxes: state.container.boxes,
    view: state.nav.view
});

export default connect(mapStateToProps, { fetchBoxes })(Container);