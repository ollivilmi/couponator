import { FETCH_BOXES, OPEN_BOX } from '../actions/types';

const initialState = {
  boxes: [],
  coupons: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOXES:
      return {
        ...state,
        boxes: action.payload
      };
      case OPEN_BOX:
      return {
        ...state,
        coupons: action.payload
      };
    default:
      return state;
  }
}