import { UPDATE_TECH_COURSES,UPDATE_NON_TECH_COURSES,UPDATE_SKILL_BASED_COURSES,UPDATE_COURSES} from "../actions/actionTypes";

const initialCourseState = {
  tech: [],
  nontech: [],
  skillbased: [],
};

export default function courses(state = initialCourseState, action) {
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
    case UPDATE_COURSES:{
      if(action.course.category==='tech'){
        const techcourses=state.tech;
        techcourses.push(action.course);
        const newTechCourses=techcourses;
        const new_state={
          ...state,
          newTechCourses
        }
        return new_state;
      }
      else if(action.course.category==='nontech'){
        const nontechcourses=state.nontech;
        nontechcourses.push(action.course);
        const newNonTechCourses=nontechcourses;
        const new_state={
          ...state,
          newNonTechCourses
        }
        return new_state;
      }
      else if(action.course.category==='skillbased'){
        const skillcourses=state.skillbased;
        skillcourses.push(action.course);
        const newSkillCourses=skillcourses;
        const new_state={
          ...state,
          newSkillCourses
        }
        return new_state;
      }
      break;
    }
    default:
      return state;
  }
}
