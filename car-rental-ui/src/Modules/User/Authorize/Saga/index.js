import { put, takeEvery, takeLatest, call } from "@redux-saga/core/effects";
import axios from 'axios'; 
import { USER_AUTHORIZE_PENDING } from "../../../../Tools/Constants/DictionaryConstants";
import axiosInstance from "../../../../Tools/Helpers/axios";
import { authorizeAction } from "../Action";
 

 
  
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

function* currentAsync(params) {  
    let postData = {
        usernameOrEmail: params.userNameOrEmail,
        password: params.userPassword,
        rememberMe: true
    }
    try{
        console.log(postData);
         const data = yield call(axiosInstance.post, `https://localhost:7040/Auth/SignIn`, postData, axiosConfig);

         console.log(filterData);
           
        const filterData = data.data;
        yield put(authorizeAction.set(filterData));
    } catch(error) {
        console.log(error);
    }
}

export function* watchAuthorization() { 
    yield takeLatest(USER_AUTHORIZE_PENDING, currentAsync);
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