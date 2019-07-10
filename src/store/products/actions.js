import productServiceClient from "../../api/product-service-client";

export const FETCHED_PRODUCTS = '@@purchases/FETCHED_PRODUCTS';
export const CREATED_PRODUCT = '@@purchases/CREATED_PRODUCT';

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const productDataReq = await productServiceClient.getAll();
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
