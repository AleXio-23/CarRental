import { JWT_TOKEN_VALIDATE_FAILED, JWT_TOKEN_VALIDATE_PENDING, JWT_TOKEN_VALIDATE_SUCCESS } from "../../../../Tools/Constants/DictionaryConstants"

 

export const tokenValidationAction = {
    get: () => { 
        return {
            type: JWT_TOKEN_VALIDATE_PENDING,
        }
    },
    set: (data) => {
        return {
            type: JWT_TOKEN_VALIDATE_SUCCESS,
            payload: data
        }
    },
    failed: (error) => {
        return {
            type: JWT_TOKEN_VALIDATE_FAILED,
            errorMessage: error
        }
    }
}