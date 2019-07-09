import React from "react";
import productServiceClient from "../../api/product-service-client";
import { connect } from 'react-redux';
import Table from "../Generic/Table";

class ProductsPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            products: undefined
        }
    }

    async componentDidMount() {
        let productDataReq = await productServiceClient.getAll();
        let productData = productDataReq.data;

        this.setState({products: productData.data});
    }

    render() {
        const products = this.state.products;

        const headers = ['#', 'Name', 'Cost'];
        const rows = products && products.map((product) => {
            return Object.assign({}, product, {cost: '£' + product.cost});
        });

        return (
            <Table headers={headers} rows={rows}/>
        );
    }
}

export default connect()(ProductsPage);