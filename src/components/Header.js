import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => (
    <header className="header">
        <div className ="header-container">
            <div className="content-container">
                <h1>Expense-Ly</h1>
            </div>
        </div>

        <div className='nav-toolbox-separator'>
            <div className="content-container">
                <div className="nav-container">
                    <div className="nav-links">
                        <NavLink to="/dashboard" className = 'nav-item' activeClassName="is-active" >Dashboard</NavLink>
                        <NavLink to="/help" className = 'nav-item' activeClassName="is-active" >Help</NavLink>
                    </div>
                    <div className = "nav-logout">
                        <button className='nav-item' onClick={startLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>

    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
