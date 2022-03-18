import { USER_REGISTER_FAILED, USER_REGISTER_PENDING, USER_REGISTER_SUCCESS } from "../../../../Tools/Constants/DictionaryConstants"

 

const initialState = {
    statuses: {
        isPending: false,
        isSuccessed: false,
        isFailed: false
    },
    data: {},
    errorMessage: ''
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_PENDING:
            return {
                ...state,
                statuses: {
                    ...initialState.statuses,
                    isPending: true
                }
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                statuses: {
                    ...initialState.statuses, 
                    isSuccessed: true 
                },
                data: action.payload
            }

        case USER_REGISTER_FAILED:
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

export default registerReducer;