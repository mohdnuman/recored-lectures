import {UPDATE_TECH_COURSES,UPDATE_NON_TECH_COURSES,UPDATE_SKILL_BASED_COURSES} from './actionTypes';
import{APIUrls} from '../helpers/urls';

export function fetchTechCourses(){
    return(dispatch)=>{
        const url=APIUrls.fetchTechCourses();
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data); 
            if(data.success){
                dispatch(updateTechCourses(data.data.courses))
                return;
            }
            else{
                console.log("some error occured in fetching courses");
            }
        })
    };
}

export function updateTechCourses(courses){
    return {
        type:UPDATE_TECH_COURSES,
        courses:courses
    };
}



export function fetchSkillBasedCourses(){
    return(dispatch)=>{
        const url=APIUrls.fetchSkillBasedCourses();
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data); 
            if(data.success){
                dispatch(updateSkillBasedCourses(data.data.courses))
                return;
            }
            else{
                console.log("some error occured in fetching courses");
            }
        })
    };
}

export function updateSkillBasedCourses(courses){
    return {
        type:UPDATE_SKILL_BASED_COURSES,
        courses:courses
    };
}

export function fetchNonTechCourses(){
    return(dispatch)=>{
        const url=APIUrls.fetchNonTechCourses();
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data); 
            if(data.success){
                dispatch(updateNonTechCourses(data.data.courses))
                return;
            }
            else{
                console.log("some error occured in fetching courses");
            }
        })
    };
}

export function updateNonTechCourses(courses){
    return {
        type:UPDATE_NON_TECH_COURSES,
        courses:courses
    };
}


