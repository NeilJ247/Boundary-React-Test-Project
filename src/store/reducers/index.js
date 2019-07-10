import {combineReducers} from 'redux';
import {authReducer} from "../authentication/reducer";
import {purchasesReducer} from '../purchases/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    purchases: purchasesReducer,
});

export default rootReducer;