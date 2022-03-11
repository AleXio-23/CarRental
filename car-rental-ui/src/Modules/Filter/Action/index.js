 import { GET_FILTER_FAILED, GET_FILTER_PENDING, GET_FILTER_SUCCESS } from "../../../Tools/Constants/DictionaryConstants"


export const filterAction = {
    get: () => {
        return {
            type: GET_FILTER_PENDING,
         
        }
    },
    set: (data) => {
        return {
            type: GET_FILTER_SUCCESS,
            payload: data
        }
    },
    failed: (error) => {
        return {
            type: GET_FILTER_FAILED,
            errorMessage: error
        }
    }
}