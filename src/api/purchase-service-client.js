import {BoundaryJSClient} from "./basclient";

const purchaseServiceClient = new BoundaryJSClient(process.env.REACT_APP_API_BASE_URL + '/api/purchases');

export default {

    getAll() {
        return purchaseServiceClient.get();
    }
}