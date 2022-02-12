import { GET_FILTER_FAILED, GET_FILTER_SUCCESS, GET_FILTER_PENDING } from "../../../../Tools/Constants/DictionaryConstants";


const initialState = {
    statuses: {
        isPending: false,
        isSuccessed: false,
        isFailed: false
    },
    data: {
        locationCityId: null,
        locationCity: null,
        locationCountryId: null,
        locationCountry: null,
        rentFromDate: null,
        retnToDate: null,
        manufacturerId: null,
        manufacturer: null,
        carModelId: null,
        carModel: null,
        carCategoryId: null,
        carCategory: null,
        carTransmisionId: null,
        carTransmision: null,
        fuelTypeId: null,
        fuelType: null,
        priceFrom: null,
        priceTo: null,
        priceTypeId: null,
        priceType: null
    },
    errorMessage: ''
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILTER_PENDING:
            return {
                ...state,
                statuses: {
                    ...state.statuses,
                    isPending: true,
                    isSuccessed: false,
                    isFailed: false
                }
            }
        case GET_FILTER_SUCCESS:
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

        case GET_FILTER_FAILED:
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

export default citiesReducer;