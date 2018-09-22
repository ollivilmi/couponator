import { TOGGLE_VIEW, BOX_VIEW } from '../actions/types';

const initialState = {
  view: BOX_VIEW
};

export default function(state = initialState, action) {
  switch (action.type) {
      case TOGGLE_VIEW:
      return {
        ...state,
        view: action.payload
      }
    default:
      return state;
  }
}