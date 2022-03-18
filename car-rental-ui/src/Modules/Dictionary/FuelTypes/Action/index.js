import { GET_ALL_FUELTYPES_FAILED, GET_ALL_FUELTYPES_PENDING, GET_ALL_FUELTYPES_SUCCESS } from "../../../../Tools/Constants/DictionaryConstants"

 
 

export const FuelTypesAction = {
    get: () => { 
        return {
            type: GET_ALL_FUELTYPES_PENDING 
             
        }
    },
    set: (data) => {
        return {
            type: GET_ALL_FUELTYPES_SUCCESS,
            payload: data
        }
    },
    failed: (error) => {
        return {
            type: GET_ALL_FUELTYPES_FAILED,
            errorMessage: error
        }
    }
}