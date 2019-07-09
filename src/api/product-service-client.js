import {BoundaryJSClient} from "./basclient";

const productServiceClient = new BoundaryJSClient(process.env.REACT_APP_API_BASE_URL + '/api/products');

export default {

    getAll() {
        return productServiceClient.get();
    }
}