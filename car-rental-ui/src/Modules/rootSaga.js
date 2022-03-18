import allReducers from "./allReducers";
import {all} from 'redux-saga/effects'
import { watchManufacturers } from "./Dictionary/Manufacturers/Saga";
import { watchCities } from "./Dictionary/Cities/Saga";
import { watchCarCategories } from "./Dictionary/CarCategories/Saga";
import { watchCarModels } from "./Dictionary/CarModels/Saga";
import { watchAuthorization } from "./User/Authorize/Saga";
import { watchTokenValidation } from "./User/TokenValidation/Saga";
import { watchTransmissions } from "./Dictionary/Transmissions/Saga"; 
import { watchRegistration } from "./User/Register/Saga";
import { watchFuelTypes } from "./Dictionary/FuelTypes/Saga";
import { watchWheelTypes } from "./Dictionary/WheelTypes/Saga";

export default function* rootSaga() {
    yield all([
        watchManufacturers(),
        watchCities(),
        watchCarCategories(), 
        watchCarModels(),
        watchAuthorization(),
        watchTokenValidation(),
        watchTransmissions(),
        watchRegistration(),
        watchFuelTypes(),
        watchWheelTypes()
    ])
}