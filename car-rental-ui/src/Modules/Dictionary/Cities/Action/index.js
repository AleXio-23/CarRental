import { GET_ALL_CITIES_FAILED, GET_ALL_CITIES_PENDING, GET_ALL_CITIES_SUCCESS } from "../../../../Tools/Constants/DictionaryConstants";


export const citiesAction = {
    get: (filterWord) => {
        return {
            type: GET_ALL_CITIES_PENDING,
            filterWord
        }
    },
    set: (data) => {
        return {
            type: GET_ALL_CITIES_SUCCESS,
            payload: data
        }
    },
    failed: (error) => {
        return {
            type: GET_ALL_CITIES_FAILED,
            errorMessage: error
        }
    }
}