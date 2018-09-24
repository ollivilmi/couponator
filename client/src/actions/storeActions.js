import { FETCH_STORES, FETCH_COUPONS_STORE, CLOSE_COUPON_VIEW_STORE } from './types';

export const fetchStores = () => dispatch => {
  fetch('../stores.json')
    .then(res => res.json())
    .then(stores =>
    dispatch({
        type: FETCH_STORES,
        payload: stores
    })
  );
};

export const fetchCouponsForStore = store => dispatch => {
    console.log(`Fetching coupons for ${store.name}`);

    fetch('../coupons.json')
        .then(res => res.json())    
        .then(stores =>
        dispatch({
            type: FETCH_COUPONS_STORE,
            payload: stores
        })
    );
}

export const closeCouponViewForStore = () => dispatch => {
    dispatch({
        type: CLOSE_COUPON_VIEW_STORE,
    })
};