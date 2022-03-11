import {UPDATE_ACTIVE_COURSE,UPDATE_LECTURES} from './actionTypes';
import{APIUrls} from '../helpers/urls';
import axios from 'axios';

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

export function createLecture(formData){
    return async (dispatch) => {
        const url = APIUrls.createLecture();
    
        const config = {
          headers: {
            Accept: "application/json",
            "content-type": "multipart/form-data",
          },
        };
    
        let res = await axios.post(url, formData, config);
        let data = res.data;
        dispatch(addLecture(data.data.lecture));
      };
}

export function addLecture(lecture){
    return{
        type:UPDATE_LECTURES,
        lecture:lecture
    }
}