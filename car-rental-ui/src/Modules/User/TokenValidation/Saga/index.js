import { put,   takeLatest, call } from "@redux-saga/core/effects";
import axios from 'axios'; 
import { JWT_TOKEN_VALIDATE_PENDING   } from "../../../../Tools/Constants/DictionaryConstants";
import {   tokenValidationAction } from "../Action";
 
import axiosInstance from "../../../../Tools/Helpers/axios";


function* currentAsync() {   
    try{
         const data = yield call(axiosInstance.get, `https://localhost:7040/Auth/TokenValidate`); 
        const filterData = data.data;
        yield put(tokenValidationAction.set(filterData));
    } catch(error) {

    }
}

export function* watchTokenValidation() { 
    yield takeLatest(JWT_TOKEN_VALIDATE_PENDING, currentAsync);
}



// const apiCall = (filterParam) => {
//     return    axios.post((`https://localhost:7040/Dictionary/GetCities`, { postData }), {axiosConfig})
//     .then(res => res.toJson())
//   }

//   function* currentAsync(params) {
//     try{
//         const data = yield call(apiCall(params.filterWord));
        
//         yield put(citiesAction.set(data.data));
//     } catch(error) {
//         console.log(error);
//     }