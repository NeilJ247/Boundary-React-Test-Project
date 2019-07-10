import {FETCHED_PRODUCTS, PRODUCTS_ERROR, PRODUCTS_INFO} from "./actions"

const initialState = {
    products: [],
    errors: [],
    info: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
            };
        }
        case PRODUCTS_ERROR: {
            return {
                ...state,
                errors: action.payload
            }
        }
        case PRODUCTS_INFO: {
            return {
                ...state,
                info: action.payload
            }
        }
        default: {
            return state;
        }

    }
};

export {reducer as productsReducer};