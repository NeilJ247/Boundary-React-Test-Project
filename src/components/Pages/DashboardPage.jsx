import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

class DashboardPage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                Dashboard!

                <Link to="/users" className="btn btn-link">Users</Link>
                <Link to="/products" className="btn btn-link">Products</Link>
                <Link to="/purchases" className="btn btn-link">Purchases</Link>
            </div>
        );
    }
}

export default connect()(DashboardPage);