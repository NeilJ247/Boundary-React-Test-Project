import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route} from 'react-router';
import { browserHistory} from "./browserhistory";
import DashboardPage from '../components/Pages/DashboardPage';
import LoginPage from "../components/Pages/LoginPage";

import './App.css';
import {ProtectedRoute} from "../components/Routes/ProtectedRoute";
import RegisterPage from "../components/Pages/RegisterPage";
import UsersPage from "../components/Pages/UsersPage";
import ProductsPage from "../components/Pages/ProductsPage";
import CreateProductPage from "../components/Pages/CreateProductPage";
import PurchasesPage from "../components/Pages/PurchasesPage";

class App extends Component {
  constructor(props) {
    super(props);

    const {dispatch} = this.props;
    browserHistory.listen(() => {});
  }

  render() {
    return (
        <div className="jumbotron">
          <div className="container">
            <div className="col-sm-8-col-sm-offset-2">
              <Router history={browserHistory}>
                <div>
                  <Route path="/login" component={LoginPage}/>
                  <Route path="/register" component={RegisterPage}/>
                  <ProtectedRoute exact path="/" component={DashboardPage} authStore={this.props.auth}/>
                  <ProtectedRoute exact path="/users" component={UsersPage} checkingFunction={this.props.auth}/>
                  <ProtectedRoute exact path="/products" component={ProductsPage} checkingFunction={this.props.auth}/>
                  <ProtectedRoute exact path="/purchases" component={PurchasesPage} checkingFunction={this.props.auth}/>
                  <ProtectedRoute exact path="/products/add" component={CreateProductPage} checkingFunction={this.props.auth}/>
                </div>
              </Router>
            </div>
          </div>
        </div>
    );
  }
}

export default connect((state) => ({
  auth: state.auth
}))(App);
