import {UPDATE_ACTIVE_COURSE} from './actionTypes';
import{APIUrls} from '../helpers/urls';

export function fetchCourse(id){
    return(dispatch)=>{
        const url=APIUrls.fetchCourse(id);
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data); 
            if(data.success){
                dispatch(updateCourse(data.data.course))
                return;
            }
            else{
                console.log("some error occured in fetching course");
            }
        })
    };
}

export function updateCourse(course){
    return {
        type:UPDATE_ACTIVE_COURSE,
        course:course
    };
}