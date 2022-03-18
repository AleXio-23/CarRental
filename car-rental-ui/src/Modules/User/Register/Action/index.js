import { USER_REGISTER_FAILED, USER_REGISTER_PENDING, USER_REGISTER_SUCCESS } from "../../../../Tools/Constants/DictionaryConstants"

 

export const registerAction = {
    get: (userName, userMail,userPassword) => { 
        return {
            type: USER_REGISTER_PENDING,
            userName, userMail,userPassword             
        }
    },
    set: (data) => {
        return {
            type: USER_REGISTER_SUCCESS,
            payload: data
        }
    },
    failed: (error) => {
        return {
            type: USER_REGISTER_FAILED,
            errorMessage: error
        }
    }
}