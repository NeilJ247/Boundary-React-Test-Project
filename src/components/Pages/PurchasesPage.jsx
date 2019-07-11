import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Table from "../Generic/Table";
import { getPurchases } from "../../store/purchases/actions";

class PurchasesPage extends React.Component {

    componentDidMount() {
        this.props.action.getPurchases();
    }

    render() {
        const purchases = this.props.purchases;
        const headers = ['Fullname', 'Email', 'Product', 'Qty', 'Total (£)'];
        const orders = purchases.length > 0 ? purchases.map((purchase) => {
            return Object.assign({
                customerName: purchase.customerName,
                customerEmail: purchase.email_address,
                product: purchase.product,
                quantity: purchase.quantity,
                total: "£" + purchase.total,
            });
        }) : [];

        return (
            <Table headers={headers} rows={orders}/>
        );
    }
}

PurchasesPage.propTypes = {
    purchases: PropTypes.array,
    action: PropTypes.shape({
        getPurchases: PropTypes.func,
    }),
};

const mapStateToProps = (state) => {
    return {
        purchases: state.purchases.purchases,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        action: {
            getPurchases: bindActionCreators(getPurchases, dispatch)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchasesPage);