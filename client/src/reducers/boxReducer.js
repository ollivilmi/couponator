import { FETCH_BOXES, OPEN_BOX } from '../actions/types';

const initialState = {
  userBoxes: [],
  coupons: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOXES:
      return {
        ...state,
        userBoxes: action.payload
      };
      case OPEN_BOX:
      console.log(action);
      return {
        ...state,
        coupons: action.payload
      };
    default:
      return state;
  }
}