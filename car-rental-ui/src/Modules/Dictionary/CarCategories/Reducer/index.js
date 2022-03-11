import { GET_ALL_CARCATEGORIES_FAILED, GET_ALL_CARCATEGORIES_PENDING, GET_ALL_CARCATEGORIES_SUCCESS} from "../../../../Tools/Constants/DictionaryConstants";



const initialState = {
    statuses: {
        isPending: false,
        isSuccessed: false,
        isFailed: false
    },
    data: [],
    errorMessage: ''
}

const carCategoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CARCATEGORIES_PENDING:
            return {
                ...state,
                statuses: {
                    ...initialState.statuses,
                    isPending: true,
                }
            }
        case GET_ALL_CARCATEGORIES_SUCCESS:
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

        case GET_ALL_CARCATEGORIES_FAILED:
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

export default carCategoriesReducer;