import React from "react";
import userServiceClient from "../../api/user-service-client";
import { connect } from 'react-redux'
import Table from '../Generic/Table';

class UsersPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            users: undefined
        }
    }

    async componentDidMount() {
        let userDataReq = await userServiceClient.getAll();
        let userData = userDataReq.data;

        this.setState({users: userData.data});
    }

    render() {
        const users = this.state.users;

        const headers = ['#', 'Forename', 'Surname', 'Email', 'Active'];
        const rows = users && users.map((user) => {
            return Object.assign({}, user, {is_active: user.is_active ? 'Y' : 'N'});
        });

        return (
            <Table headers={headers} rows={rows}/>
        );
    }
}

export default connect()(UsersPage);