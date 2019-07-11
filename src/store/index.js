import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./reducers";
import devLogger from "../middleware/devlog";

// Shouldn't be used in production but used for prototype and dev purposes
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            devLogger
        )
    )
);