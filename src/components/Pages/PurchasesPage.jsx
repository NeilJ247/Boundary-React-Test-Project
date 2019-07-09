import React from "react";
import purchaseServiceClient from "../../api/purchase-service-client";
import { connect } from 'react-redux';
import Table from "../Generic/Table";

class ProductsPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            purchases: undefined
        }
    }

    async componentDidMount() {
        let purchaseDataReq = await purchaseServiceClient.getAll();
        let purchaseData = purchaseDataReq.data;

        this.setState({purchases: purchaseData.data});
    }

    render() {
        const purchases = this.state.purchases;

        const headers = ['Fullname', 'Email', 'Product', 'Qty', 'Total (£)'];

        const orders = purchases && purchases.map((purchase) => {
            return Object.assign({
                customerName: purchase.customerName,
                customerEmail: purchase.email_address,
                product: purchase.product,
                quantity: purchase.quantity,
                total: "£" + purchase.total,
            });
        });

        return (
            <Table headers={headers} rows={orders}/>
        );
    }
}

export default connect()(ProductsPage);