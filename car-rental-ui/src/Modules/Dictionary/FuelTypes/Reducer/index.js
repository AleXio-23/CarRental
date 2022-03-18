import { GET_ALL_FUELTYPES_FAILED, GET_ALL_FUELTYPES_PENDING, GET_ALL_FUELTYPES_SUCCESS, GET_FILTER_FAILED } from "../../../../Tools/Constants/DictionaryConstants"



const initialState = {
    statuses: {
        isPending: false,
        isSuccessed: false,
        isFailed: false
    },
    data: [],
    errorMessage: ''
}

const fuelTypesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_FUELTYPES_PENDING:
            return {
                ...state,
                statuses: {
                    ...state.statuses,
                    isPending: true,
                    isSuccessed: false,
                    isFailed: false
                }
            }
        case GET_ALL_FUELTYPES_SUCCESS:
            return {
                ...state,
                statuses: {
                    ...state.statuses,
                    isPending: false,
                    isSuccessed: true,
                    isFailed: false
                },
                data: action.payload
            }

        case GET_ALL_FUELTYPES_FAILED:
            return {
                ...state,
                statuses: {
                    ...state.statuses,
                    isPending: false,
                    isSuccessed: false,
                    isFailed: true
                },
                errorMessage: action.errorMessage
            }
        default:
            return { ...state }
    }
}

export default fuelTypesReducer;