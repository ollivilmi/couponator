import { FETCH_BOXES } from './types';

export const fetchBoxes = () => dispatch => {
    fetch('../boxes.json')
      .then(res => res.json())
      .then(boxes =>
        dispatch({
          type: FETCH_BOXES,
          payload: boxes
        })
      );
  };