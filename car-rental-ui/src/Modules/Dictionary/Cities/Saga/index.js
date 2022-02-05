import { put, takeEvery, takeLatest, call } from "@redux-saga/core/effects";
import axios from 'axios';
import { GET_ALL_CITIES_PENDING } from "../../../../Tools/Constants/DictionaryConstants";
import { citiesAction } from "../Action";

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
        const data = yield call(axios.post, `https://localhost:7040/Dictionary/GetCities`, postData, axiosConfig);
        yield put(citiesAction.set(data.data));
    } catch(error) {
        console.log(error);
    }
}

export function* watchCities() {
    yield takeLatest(GET_ALL_CITIES_PENDING, currentAsync);
}