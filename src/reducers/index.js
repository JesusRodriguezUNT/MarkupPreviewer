import { combineReducers } from 'redux';
import markdownUpdate from './markdownReducer';

export default combineReducers({ update: markdownUpdate });