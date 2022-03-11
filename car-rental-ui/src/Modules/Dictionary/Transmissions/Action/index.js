import { GET_ALL_TRANSMISSIONS_FAILED, GET_ALL_TRANSMISSIONS_PENDING, GET_ALL_TRANSMISSIONS_SUCCESS } from "../../../../Tools/Constants/DictionaryConstants"

 

export const TransmissionsAction = {
    get: () => { 
        return {
            type: GET_ALL_TRANSMISSIONS_PENDING 
             
        }
    },
    set: (data) => {
        return {
            type: GET_ALL_TRANSMISSIONS_SUCCESS,
            payload: data
        }
    },
    failed: (error) => {
        return {
            type: GET_ALL_TRANSMISSIONS_FAILED,
            errorMessage: error
        }
    }
}