import { put, takeEvery, takeLatest, call } from "@redux-saga/core/effects";
import axios from 'axios';
import {   GET_ALL_CARCATEGORIES_PENDING } from "../../../../Tools/Constants/DictionaryConstants";
import { carCategoriesAction } from "../Action";
 

var postData = {
    temp: ""
};
  
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

function* currentAsync() { 
    try{
        const data = yield call(axios.post, `https://localhost:7040/Dictionary/GetCarCategories`, postData, axiosConfig);
           
       
        yield put(carCategoriesAction.set(data.data.data));
    } catch(error) {
        // console.log(error);
    }
}

export function* watchCarCategories() { 
    yield takeLatest(GET_ALL_CARCATEGORIES_PENDING, currentAsync);
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