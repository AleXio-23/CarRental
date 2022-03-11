import { GET_ALL_CARCATEGORIES_FAILED, GET_ALL_CARCATEGORIES_PENDING, GET_ALL_CARCATEGORIES_SUCCESS} from "../../../../Tools/Constants/DictionaryConstants";


export const carCategoriesAction = {
    get: () => { 
        return {
            type: GET_ALL_CARCATEGORIES_PENDING 
        }
    },
    set: (data) => {
        return {
            type: GET_ALL_CARCATEGORIES_SUCCESS,
            payload: data
        }
    },
    failed: (error) => {
        return {
            type: GET_ALL_CARCATEGORIES_FAILED,
            errorMessage: error
        }
    }
}