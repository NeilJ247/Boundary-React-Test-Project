import {BoundaryJSClient} from "./basclient";

const productServiceClient = new BoundaryJSClient(process.env.REACT_APP_API_BASE_URL + '/api/products');

export default {
    getAll() {
        return productServiceClient.get();
    },

    createProduct(display_name, cost) {
        const requestData = {
            data: {
                display_name,
                cost
            }
        };
        return productServiceClient.post(undefined, requestData);
    },
}