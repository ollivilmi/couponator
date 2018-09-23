import { FETCH_BOXES, OPEN_BOX, TOGGLE_OPENING, RESET_COUPONS } from '../actions/types';

const initialState = {
  boxes: [],
  coupons: [],
  opening: false
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
        coupons: action.payload,
        opening: true
      };
      case TOGGLE_OPENING:
      return {
        ...state,
        opening: (!state.opening)
      }
      case RESET_COUPONS:
        return {
          ...state,
          coupons: []
        }
    default:
      return state;
  }
}