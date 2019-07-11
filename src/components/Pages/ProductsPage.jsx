import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Table from "../Generic/Table";
import {getProducts} from "../../store/products/actions";
import {NavLink} from "react-router-dom";

class ProductsPage extends React.Component {
    componentDidMount() {
        this.props.action.getProducts();
    }

    render() {
        const {products, info} = this.props;
        const headers = ['#', 'Name', 'Cost'];
        const rows = products.length > 0 ? products.map((product) => {
            return Object.assign({}, product, {cost: '£' + product.cost});
        }) : [];

        return (
            <div>
                {
                    info &&
                    <div className="alert alert-success" role="alert">
                        {info}
                    </div>
                }
                <div className="prod-button">
                    <NavLink className="btn btn-primary stretched-link" to="/products/add">Add Product</NavLink>
                </div>
                <Table headers={headers} rows={rows}/>
            </div>
        );
    }
}

ProductsPage.propTypes = {
    info: PropTypes.string,
    products: PropTypes.array,
    action: PropTypes.shape({
        getProducts: PropTypes.func,
    }),
};

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        info: state.products.info,
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