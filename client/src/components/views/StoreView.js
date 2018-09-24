import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchStores, fetchCouponsForStore, closeCouponViewForStore } from '../../actions/storeActions';

const Store = props => {
    return (
        <button onClick={props.toggleView} className="btn btn-secondary btn-lg btn coupon">
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <br/>
            <p>{props.nearest}</p>
        </button>
    )
}

const CouponView = props => {
    return <button onClick={()=> props.close()}>{props.coupons}</button>
}

class StoreView extends Component {
    componentWillMount() {
        this.props.fetchStores();
    }

    mapStores() {
        console.log(this.props.stores);
        return this.props.stores.map((store, index) => {
            return (
                <Store
                    key={index}
                    toggleView={() => this.props.fetchCouponsForStore(store)} 
                    name={store.name} 
                    description={store.description} 
                    nearest={store.nearest} 
                />
            )
        })
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                {this.props.isCouponViewActive ?
                <CouponView close={this.props.closeCouponViewForStore} coupons={this.props.coupons}/> : 
                this.mapStores()
                }
            </div>
        )
    }
}

StoreView.propTypes = {
    fetchStores: PropTypes.func.isRequired,
    fetchCouponsForStore: PropTypes.func.isRequired,
    stores: PropTypes.array.isRequired,
    isCouponViewActive: PropTypes.bool.isRequired,
    coupons: PropTypes.array
}

const mapStateToProps = state => ({
    stores: state.storeView.stores,
    coupons: state.storeView.coupons,
    isCouponViewActive: state.storeView.isCouponViewActive
});

export default connect(mapStateToProps, { fetchStores, fetchCouponsForStore, closeCouponViewForStore })(StoreView);