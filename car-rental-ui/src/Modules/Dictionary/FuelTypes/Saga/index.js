import { put, takeEvery, takeLatest, call } from "@redux-saga/core/effects";
import axios from 'axios'; 
import { GET_ALL_FUELTYPES_PENDING } from "../../../../Tools/Constants/DictionaryConstants"; 
import { FuelTypesAction } from "../Action";
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
         const data = yield call(axios.post, `https://localhost:7040/Dictionary/GetFuelTypes`, postData, axiosConfig);
           
        const filterData = data.data.data;
        yield put(FuelTypesAction.set(filterData));
    } catch(error) {
        // console.log(error);
    }
}

export function* watchFuelTypes() { 
    yield takeLatest(GET_ALL_FUELTYPES_PENDING, currentAsync);
}
 