import { FETCH_BOXES, OPEN_BOX, TOGGLE_OPENING, RESET_COUPONS } from './types';

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

export const openBox = box => dispatch => {
    fetch('../coupons.json')/*, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(box)
    })*/
    .then(res => res.json())
    .then(coupons =>
      dispatch({
        type: OPEN_BOX,
        payload: coupons
      })
  );
};

export const toggleOpening = () => dispatch => {
  dispatch({
      type: TOGGLE_OPENING
  })
}

export const resetCoupons = () => dispatch => {
  dispatch({
      type: RESET_COUPONS
  })
}