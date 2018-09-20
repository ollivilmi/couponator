import { FETCH_BOXES } from '../actions/types';

const initialState = {
  contents: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOXES:
      return {
        ...state,
        contents: action.payload
      };
    default:
      return state;
  }
}