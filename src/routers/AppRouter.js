import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import ExpenseDashBoardPage from '../components/ExpenseDashBoard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


/* switch: stops when it fines a match else browserRouter will fetch all that match the path unless "exact" is true */
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/> 
            <Switch>
                <Route path="/" component={ExpenseDashBoardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);



export default AppRouter;
