import { combineReducers } from "redux";
import {reducer as citiesReducer} from "./Dictionary/Cities";
import {reducer as manufacturersReducer} from "./Dictionary/Manufacturers";
import {reducer as carCategoriesReducer} from "./Dictionary/CarCategories";
import {reducer as carModelsReducer} from "./Dictionary/CarModels";
import {reducer as transmissionsReducer} from "./Dictionary/Transmissions";

import {reducer as authorizeReducer} from "./User/Authorize";
import {reducer as tokenValidationReducer} from "./User/TokenValidation";
import { reducer as filterReducer } from "./Filter";




const allReducers = combineReducers({
    cities: citiesReducer,
    manufacturers: manufacturersReducer,
    carCategories: carCategoriesReducer,
    carsFilter : filterReducer,
    carModels: carModelsReducer,
    authorize: authorizeReducer,
    tokenValidate: tokenValidationReducer,
    transmissions: transmissionsReducer
});


export default allReducers;