import { USER_AUTHORIZE_FAILED, USER_AUTHORIZE_PENDING, USER_AUTHORIZE_SUCCESS } from "../../../../Tools/Constants/DictionaryConstants"

 


const initialState = {
    statuses: {
        isPending: false,
        isSuccessed: false,
        isFailed: false
    },
    data: {},
    errorMessage: ''
}

const authorizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHORIZE_PENDING:
            return {
                ...state,
                statuses: {
                    ...initialState.statuses,
                    isPending: true
                }
            }
        case USER_AUTHORIZE_SUCCESS:
            return {
                ...state,
                statuses: {
                    ...initialState.statuses, 
                    isSuccessed: true 
                },
                data: action.payload
            }

        case USER_AUTHORIZE_FAILED:
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

export default authorizeReducer;