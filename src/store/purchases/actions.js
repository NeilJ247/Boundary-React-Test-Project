import purchaseServiceClient from "../../api/purchase-service-client";

export const FETCHED_PURCHASES = '@@purchases/FETCHED_PURCHASES';

export const getPurchases = () => {
    return async (dispatch) => {
        try {
            const purchaseDataReq = await purchaseServiceClient.getAll();
            const purchaseData = purchaseDataReq.data;
            dispatch({
                type: FETCHED_PURCHASES,
                payload: purchaseData.data,
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
