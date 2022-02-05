import { combineReducers } from "redux";
import {reducer as citiesReducer} from "./Dictionary/Cities";



const allReducers = combineReducers({
    cities: citiesReducer
});


export default allReducers;