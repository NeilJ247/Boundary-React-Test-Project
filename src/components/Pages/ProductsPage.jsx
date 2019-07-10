import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Table from "../Generic/Table";
import {getProducts} from "../../store/products/actions";

class ProductsPage extends React.Component {
    componentDidMount() {
        this.props.action.getProducts();
    }

    render() {
        const products = this.props.products;
        const headers = ['#', 'Name', 'Cost'];
        const rows = products.length > 0 ? products.map((product) => {
            return Object.assign({}, product, {cost: '£' + product.cost});
        }) : [];

        return (
            <Table headers={headers} rows={rows}/>
        );
    }
}

ProductsPage.propTypes = {
    products: PropTypes.array,
    action: PropTypes.shape({
        getProducts: PropTypes.func,
    }),
};

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: {
            getProducts: bindActionCreators(getProducts, dispatch)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);