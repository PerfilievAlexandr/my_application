import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import AddUserForm from './AddUserForm'

class AdminPage extends Component {
    render() {
        return (
            <div>
                <h1>Admin page</h1>
                <NavLink to='/admin/adduser' activeStyle={{color: 'red'}}>Add new user</NavLink>
                <Route  path='/admin/adduser' render={()=><AddUserForm />} />
            </div>
        );
    };
}

export default AdminPage;
