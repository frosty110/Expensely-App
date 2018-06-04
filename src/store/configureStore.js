import {createStore, combineReducers } from 'redux';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

//store creation using combineReducers which allows us to uses multiple reducers
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }), /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// function to return store.
export default () => { return store };


// store.subscribe( () =>{
//     const state = store.getState();
//     const ve = visibleExpenses(state.expenses, state.filters);
//     console.log(state);
//     console.log(ve);
// });