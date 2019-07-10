import {FETCHED_PRODUCTS, CREATED_PRODUCT} from "./actions"

const initialState = {
    products: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
            };
        }
        case CREATED_PRODUCT: {
            return {
                ...state,
                products: state.products.unshift(action.payload),
            };
        }
        default: {
            return state;
        }

    }
};

export {reducer as productsReducer};