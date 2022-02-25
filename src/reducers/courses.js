import { UPDATE_TECH_COURSES,UPDATE_NON_TECH_COURSES,UPDATE_SKILL_BASED_COURSES} from "../actions/actionTypes";

const initialCourseState = {
  tech: [],
  nontech: [],
  skillbased: [],
};

export default function profile(state = initialCourseState, action) {
  switch (action.type) {
    case UPDATE_TECH_COURSES:
      return {
        ...state,
        tech: action.courses,
      };
    case UPDATE_NON_TECH_COURSES:
      return {
        ...state,
        nontech: action.courses,
      };
    case UPDATE_SKILL_BASED_COURSES:
      return {
        ...state,
        skillbased: action.courses,
      };
    default:
      return state;
  }
}
