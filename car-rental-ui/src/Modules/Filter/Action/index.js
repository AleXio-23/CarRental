import { GET_FILTER_FAILED, GET_FILTER_SUCCESS, GET_FILTER_PENDING } from "../../../../Tools/Constants/DictionaryConstants";


export const citiesAction = {
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