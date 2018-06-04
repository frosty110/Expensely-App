import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import ConfigreStore from './store/configureStore';

import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = ConfigreStore();
console.log(store.getState());

store.dispatch(addExpense({description:"Water Bill", amount:23}));
store.dispatch(addExpense({description:"Gas Bill", amount:79, createdAt:125}));
store.dispatch(addExpense({description:"Rent", amount:1500}));
// store.dispatch(setTextFilter('Water'));

// setTimeout( ()=> {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// provider: react component that allows consumers to be subsribe to the value's (store) change
const jsx = (
    <Provider store ={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

const demoState = {
    expenses: [{
        id: 'someId',
        description: 'Jan rent',
        note: 'This is the final payment for that address',
        amount:54500,
        createdAt : 0
    }],
    filters: {
        text:'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};






