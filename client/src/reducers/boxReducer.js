import { FETCH_BOXES, OPEN_BOX, CLOSE_BOX } from '../actions/types';

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

    case CLOSE_BOX:
    return {
      ...state,
      coupons: [],
      opening: false
    }

    default:
      return state;
  }
}