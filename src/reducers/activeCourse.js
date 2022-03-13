import { UPDATE_ACTIVE_COURSE,UPDATE_LECTURES} from "../actions/actionTypes";

const initialCourseState = {};

export default function activeCourses(state = initialCourseState, action) {
  switch (action.type) {
    case UPDATE_ACTIVE_COURSE:
      return action.course;
    case UPDATE_LECTURES:
      const old_lectures=state.lectures;
      old_lectures.push(action.lecture);
      const new_state={
        ...state,
        lectures:old_lectures
      }
      // new_state.lectures=old_lectures;
      return new_state;
    default:
      return state;
  }
}
