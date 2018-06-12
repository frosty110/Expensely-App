import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashBoardPage from '../components/ExpenseDashBoard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';

import SignUpPage from '../components/SignUpPage';
import AccountPage from '../components/AccountSettingPage';
import PasswordForgetPage from '../components/PasswordForgetPage';
import ManageGoalsPage from '../components/ManageGoalsPage';
// import WelcomePage from '../components/WelcomePage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

/* switch: stops when it fines a match else browserRouter will fetch all that match the path unless "exact" is true */
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>   
                
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PublicRoute path="/login" component={LoginPage} exact={true} />
                <PublicRoute path="/signup" component={SignUpPage}/>
                <PublicRoute path="/forgotpassword" component={PasswordForgetPage} />

                <PrivateRoute path="/dashboard" component={ExpenseDashBoardPage} />
                <PrivateRoute path="/managegoals" component={ManageGoalsPage} />
                
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                
                <PrivateRoute path="/help" component={HelpPage} />
                <PrivateRoute path="/settings" component={AccountPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);



export default AppRouter;
