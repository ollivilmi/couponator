import { FETCH_BOXES, OPEN_BOX, BOX_VIEW, TOGGLE_VIEW } from '../actions/types';

const initialState = {
  boxes: [],
  coupons: [],
  view: BOX_VIEW
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOXES:
      return {
        ...state,
        boxes: action.payload
      };
      case OPEN_BOX:
      console.log(action);
      return {
        ...state,
        coupons: action.payload
      };
      case TOGGLE_VIEW:
      return {
        ...state,
        view: action.payload
      }
    default:
      return state;
  }
}