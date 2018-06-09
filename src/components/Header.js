import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => (
    <header>
        <h1>Expense-Ly</h1>
        <h4>Manage your expenses</h4>
        <NavLink to="/dashboard" activeClassName="is-active" activeStyle={{color: "red"}} >Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" activeStyle={{color: "red"}} >Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active" activeStyle={{color: "red"}} >Help</NavLink>
        <button onClick={startLogout}>Logout</button>

    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
