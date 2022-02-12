import { combineReducers } from "redux";
import {reducer as citiesReducer} from "./Dictionary/Cities";
import {reducer as manufacturersReducer} from "./Dictionary/Manufacturers";




const allReducers = combineReducers({
    cities: citiesReducer,
    manufacturers: manufacturersReducer
});


export default allReducers;