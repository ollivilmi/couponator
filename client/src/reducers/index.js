import { combineReducers } from 'redux';
import boxReducer from './boxReducer';

export default combineReducers({
  boxes: boxReducer
});