import { GET_FILTERED_CARMODELS_FAILED, GET_FILTERED_CARMODELS_PENDING, GET_FILTERED_CARMODELS_SUCCESS } from "../../../../Tools/Constants/DictionaryConstants"

 

export const carModelsAction = {
    get: (manufacturerIds) => { 
        return {
            type: GET_FILTERED_CARMODELS_PENDING,
            manufacturerIds             
        }
    },
    set: (data) => {
        return {
            type: GET_FILTERED_CARMODELS_SUCCESS,
            payload: data
        }
    },
    failed: (error) => {
        return {
            type: GET_FILTERED_CARMODELS_FAILED,
            errorMessage: error
        }
    }
}