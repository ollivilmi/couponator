import { FETCH_BOXES, OPEN_BOX, CLOSE_BOX } from './types';

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
    console.log(`Trying to open box: ${box.title}`);
    if (box.amount < 1) {
      return;
    }
    // box will be used to determine which box to remove & open for the user
    // currently just fetching some random coupon json for testing
    fetch('../coupons.json')/*, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(box)
    })*/
    .then(res => res.json())
    .then(coupons => {
      // TODO : implement the handling of an invalid response
      dispatch({
        type: OPEN_BOX,
        payload: coupons
      })
    }
  );
};

export const closeBox = () => dispatch => {
  console.log("Closing box and clearing coupons from state");
  dispatch({
      type: CLOSE_BOX
  })
}
