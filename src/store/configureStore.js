import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store creation using combineReducers which allows us to uses multiple reducers
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        auth:  authReducer
    }), /* preloadedState, */
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// function to return store.
export default () => { return store };


// store.subscribe( () =>{
//     const state = store.getState();
//     const ve = visibleExpenses(state.expenses, state.filters);
//     console.log(state);
//     console.log(ve);
// });