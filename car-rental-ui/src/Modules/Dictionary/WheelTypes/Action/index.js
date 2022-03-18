import { GET_ALL_WHEELTYPES_FAILED, GET_ALL_WHEELTYPES_PENDING, GET_ALL_WHEELTYPES_SUCCESS } from "../../../../Tools/Constants/DictionaryConstants"

 
 

export const WheelTypesAction = {
    get: () => { 
        return {
            type: GET_ALL_WHEELTYPES_PENDING 
             
        }
    },
    set: (data) => {
        return {
            type: GET_ALL_WHEELTYPES_SUCCESS,
            payload: data
        }
    },
    failed: (error) => {
        return {
            type: GET_ALL_WHEELTYPES_FAILED,
            errorMessage: error
        }
    }
}