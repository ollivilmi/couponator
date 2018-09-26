import { FETCH_STORES, FETCH_COUPONS_STORE, TOGGLE_NAV } from './types';

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
    fetch('../coupons.json')
        .then(res => res.json())    
        .then(stores =>
        dispatch({
            type: FETCH_COUPONS_STORE,
            payload: stores
        }),
        dispatch({
            type: TOGGLE_NAV
        })
    );
};