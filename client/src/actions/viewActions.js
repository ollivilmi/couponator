import { TOGGLE_VIEW } from './types';

export const toggleView = view => dispatch => {
    dispatch({
        type: TOGGLE_VIEW,
        payload: view
    })
}