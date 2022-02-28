import { UPDATE_ACTIVE_COURSE} from "../actions/actionTypes";

const initialCourseState = {};

export default function activeCourses(state = initialCourseState, action) {
  switch (action.type) {
    case UPDATE_ACTIVE_COURSE:
      return action.course;
    default:
      return state;
  }
}
