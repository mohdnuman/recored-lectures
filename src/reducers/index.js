import { combineReducers } from "redux";
import courses from './courses';
import activeCourse from './activeCourse';

export default combineReducers({
  courses,
  activeCourse
});