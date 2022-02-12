import { put, takeEvery, takeLatest, call } from "@redux-saga/core/effects";
import axios from 'axios';
import {   GET_ALL_MANUFACTURERS_PENDING } from "../../../../Tools/Constants/DictionaryConstants";
import {   manufacturersAction } from "../Action";

var postData = {
    temp: ""
};
  
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

    function* currentAsync(params) {
        try{
            const data = yield call(axios.post, `https://localhost:7040/Dictionary/GetManufacturers`, postData, axiosConfig);
           
            const filterData = data.data.data?.filter(
                x => x.manufacturerName.toString().toLowerCase().includes(params.filterWord.toString().toLowerCase())               
                );
            yield put(manufacturersAction.set(filterData));
        } catch(error) {
            console.log(error);
        }
    }

export function* watchCities() {
    yield takeLatest(GET_ALL_MANUFACTURERS_PENDING, currentAsync);
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