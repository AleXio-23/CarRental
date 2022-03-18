import { put, takeEvery, takeLatest, call } from "@redux-saga/core/effects";
import axios from 'axios';  
import { USER_REGISTER_PENDING } from "../../../../Tools/Constants/DictionaryConstants";
import axiosInstance from "../../../../Tools/Helpers/axios";
import { authorizeAction, registerAction } from "../Action";
 

 
  
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

function* currentAsync(params) {  
    let postData = {
        userName: params.userName,
        email: params.userMail,
        password: params.userPassword
    }
    try{ 
         const data = yield call(axios.post, `https://localhost:7040/Auth/Register`, postData, axiosConfig);
 
           
        const filterData = data.data  ;
        yield put(registerAction.set(filterData));
    } catch(error) {
        console.log(error);
    }
}

export function* watchRegistration() { 
    yield takeLatest(USER_REGISTER_PENDING, currentAsync);
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