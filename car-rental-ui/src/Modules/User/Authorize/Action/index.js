import { USER_AUTHORIZE_FAILED, USER_AUTHORIZE_PENDING, USER_AUTHORIZE_SUCCESS } from "../../../../Tools/Constants/DictionaryConstants"

 

export const authorizeAction = {
    get: (userNameOrEmail,userPassword) => { 
        return {
            type: USER_AUTHORIZE_PENDING,
            userNameOrEmail,userPassword             
        }
    },
    set: (data) => {
        return {
            type: USER_AUTHORIZE_SUCCESS,
            payload: data
        }
    },
    failed: (error) => {
        return {
            type: USER_AUTHORIZE_FAILED,
            errorMessage: error
        }
    }
}