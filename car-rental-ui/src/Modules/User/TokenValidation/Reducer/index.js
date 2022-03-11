import { JWT_TOKEN_VALIDATE_FAILED, JWT_TOKEN_VALIDATE_PENDING, JWT_TOKEN_VALIDATE_SUCCESS } from "../../../../Tools/Constants/DictionaryConstants"

 

const initialState = {
    statuses: {
        isPending: false,
        isSuccessed: false,
        isFailed: false
    },
    data: {},
    errorMessage: ''
}



const tokenValidationReducer = (state = initialState, action) => {
    switch (action.type) {
        case JWT_TOKEN_VALIDATE_PENDING:
            return {
                ...state,
                statuses: {
                    ...initialState.statuses,
                    isPending: true
                }
            }
        case JWT_TOKEN_VALIDATE_SUCCESS:
            return {
                ...state,
                statuses: {
                    ...initialState.statuses, 
                    isSuccessed: true 
                },
                data: action.payload
            }

        case JWT_TOKEN_VALIDATE_FAILED:
            return {
                ...state,
                statuses: {
                    ...initialState.statuses, 
                    isFailed: true
                },
                errorMessage: action.errorMessage
            }
        default:
            return { ...state }
    }
}

export default tokenValidationReducer;