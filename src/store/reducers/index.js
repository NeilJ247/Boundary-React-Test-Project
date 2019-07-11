import {combineReducers} from 'redux';
import {authReducer} from "../authentication/reducer";
import {purchasesReducer} from '../purchases/reducer';
import {productsReducer} from '../products/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    purchases: purchasesReducer,
    products: productsReducer,
});

export default rootReducer;