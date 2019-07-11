import {FETCHED_PURCHASES} from "./actions"

const initialState = {
    purchases: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_PURCHASES: {
            return {
                ...state,
                purchases: action.payload,
            };
        }
        default: {
            return state;
        }

    }
};

export {reducer as purchasesReducer};