import { put, takeEvery, takeLatest, call } from "@redux-saga/core/effects";
import axios from 'axios';
import { GET_FILTERED_CARMODELS_PENDING } from "../../../../Tools/Constants/DictionaryConstants";
import { carModelsAction } from "../Action";
 

 
  
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

function* currentAsync(params) { 
    let postData = {
        manufacturerIds: params.manufacturerIds
    }
    try{
         const data = yield call(axios.post, `https://localhost:7040/Dictionary/GetCarModels`, postData, axiosConfig);
           
        const filterData = data.data.data;
        yield put(carModelsAction.set(filterData));
    } catch(error) {
        console.log(error);
    }
}

export function* watchCarModels() { 
    yield takeLatest(GET_FILTERED_CARMODELS_PENDING, currentAsync);
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