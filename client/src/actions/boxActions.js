import { FETCH_BOXES, OPEN_BOX } from './types';

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
    console.log(box);
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