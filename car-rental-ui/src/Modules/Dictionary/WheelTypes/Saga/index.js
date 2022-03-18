import { put, takeEvery, takeLatest, call } from "@redux-saga/core/effects";
import axios from 'axios'; 
import {  GET_ALL_WHEELTYPES_PENDING } from "../../../../Tools/Constants/DictionaryConstants"; 
import {  WheelTypesAction } from "../Action";
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
         const data = yield call(axios.post, `https://localhost:7040/Dictionary/GetWheelTypes`, postData, axiosConfig);
           
        const filterData = data.data.data;
        yield put(WheelTypesAction.set(filterData));
    } catch(error) {
        // console.log(error);
    }
}

export function* watchWheelTypes() { 
    yield takeLatest(GET_ALL_WHEELTYPES_PENDING, currentAsync);
}
 