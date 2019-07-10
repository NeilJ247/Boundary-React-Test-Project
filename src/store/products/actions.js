import productServiceClient from "../../api/product-service-client";
import {browserHistory} from "./../../core/browserhistory";
import ApiError from "../../api/ApiError";

export const FETCHED_PRODUCTS = '@@purchases/FETCHED_PRODUCTS';
export const PRODUCTS_ERROR = '@@purchases/PRODUCTS_ERROR';
export const PRODUCTS_INFO = '@@purchases/PRODUCTS_INFO';

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const productDataReq = await productServiceClient.getAll();

            if (200 !== productDataReq.status) {
                throw new Error('Expected status 200 but got ' + productDataReq.status);
            }

            const productData = productDataReq.data;
            dispatch({
                type: FETCHED_PRODUCTS,
                payload: productData.data,
            });
        } catch (error) {
            // TODO need something to handle this and display errors
            dispatch({
                type: 'API_ERROR',
                payload: 'Unable to get Assets.',
            });
        }
    }
};

export const createProduct = (display_name, cost) => {
    return async (dispatch) => {
        try {

            if (isEmpty(display_name) || isEmpty(cost)) {
                dispatch({
                    type: PRODUCTS_ERROR,
                    payload: ['Required fields are empty.'],
                });
                return;
            }

            await productServiceClient.createProduct(display_name, cost);
            browserHistory.push('/products');
            dispatch({
                type: PRODUCTS_INFO,
                payload: 'Created product ' + display_name,
            });
        } catch (error) {
            if (error instanceof ApiError) {
                dispatch({
                    type: PRODUCTS_ERROR,
                    payload: error.errors,
                });
                return;
            }

            dispatch({
                type: 'API_ERROR',
                payload: 'Unable to create a Products.',
            });
        }
    }
};

const isEmpty = (value) => {
    return undefined === value || "" === value || null === value;
};
