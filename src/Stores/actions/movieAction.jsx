import axios from "../../Utils/Axios";
import {loadmovie} from  "../reducers/MoviesSlice"
export {removemovie} from '../reducers/MoviesSlice'


export const asyncloadmovies=async(id)=>(dispatch,getState)=>{
    try {
        const detail=axios.get(`/movie/${id}`)
    } catch (error) {
        console.log('Error');
        
    }
}