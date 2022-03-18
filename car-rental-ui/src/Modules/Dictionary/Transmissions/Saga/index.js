import { put, takeEvery, takeLatest, call } from "@redux-saga/core/effects";
import axios from 'axios'; 
import { GET_ALL_TRANSMISSIONS_PENDING } from "../../../../Tools/Constants/DictionaryConstants"; 
import { TransmissionsAction } from "../Action";
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
         const data = yield call(axios.post, `https://localhost:7040/Dictionary/GetTransmisions`, postData, axiosConfig);
           
        const filterData = data.data.data;
        yield put(TransmissionsAction.set(filterData));
    } catch(error) {
        // console.log(error);
    }
}

export function* watchTransmissions() { 
    yield takeLatest(GET_ALL_TRANSMISSIONS_PENDING, currentAsync);
}
 