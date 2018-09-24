import { FETCH_STORES, FETCH_COUPONS_STORE, CLOSE_COUPON_VIEW_STORE } from '../actions/types';

const initialState = {
  stores: [],
  coupons: [],
  isCouponViewActive: false
};

export default function(state = initialState, action) {
  switch (action.type) {
      case FETCH_STORES:
      return {
        ...state,
        stores: action.payload
      }
      case FETCH_COUPONS_STORE:
      return {
          ...state,
          coupons: action.payload,
          isCouponViewActive: true
      }
      case CLOSE_COUPON_VIEW_STORE:
      return {
          ...state,
          isCouponViewActive: false
      }
    default:
      return state;
  }
}