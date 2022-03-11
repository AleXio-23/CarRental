import { GET_FILTERED_CARMODELS_FAILED, GET_FILTERED_CARMODELS_PENDING, GET_FILTERED_CARMODELS_SUCCESS } from "../../../../Tools/Constants/DictionaryConstants"

 


const initialState = {
    statuses: {
        isPending: false,
        isSuccessed: false,
        isFailed: false
    },
    data: {},
    errorMessage: ''
}

const carModelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILTERED_CARMODELS_PENDING:
            return {
                ...state,
                statuses: {
                    ...initialState.statuses,
                    isPending: true
                }
            }
        case GET_FILTERED_CARMODELS_SUCCESS:
            return {
                ...state,
                statuses: {
                    ...initialState.statuses, 
                    isSuccessed: true 
                },
                data: action.payload
            }

        case GET_FILTERED_CARMODELS_FAILED:
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

export default carModelsReducer;