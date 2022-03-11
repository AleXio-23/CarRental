import { GET_ALL_MANUFACTURERS_FAILED, GET_ALL_MANUFACTURERS_PENDING, GET_ALL_MANUFACTURERS_SUCCESS } from "../../../../Tools/Constants/DictionaryConstants";


export const manufacturersAction = {
    get: () => { 
        return {
            type: GET_ALL_MANUFACTURERS_PENDING 
             
        }
    },
    set: (data) => {
        return {
            type: GET_ALL_MANUFACTURERS_SUCCESS,
            payload: data
        }
    },
    failed: (error) => {
        return {
            type: GET_ALL_MANUFACTURERS_FAILED,
            errorMessage: error
        }
    }
}