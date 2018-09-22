import { combineReducers } from 'redux';
import boxReducer from './boxReducer';
import viewReducer from './viewReducer';

export default combineReducers({
  container: boxReducer,
  nav: viewReducer
});