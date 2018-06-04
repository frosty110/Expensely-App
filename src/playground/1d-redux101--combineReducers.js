import {createStore, combineReducers } from 'redux';


// data model of what the state would look like
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

// Actions

// ADD, remove, edit Expense
// set text filter, sort by date, sort by amount, set start/end date
// A lot of options.

// reducer for Expenses with default state
const expensesReducerDefaultState = [];
const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        default:
            return state;
    }
};


// reducer for Filters with default state
const filtersReducerDefaultState = {
    text : '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type){
        default:
            return state;
    }
};

//store creation using combineReducers which allows us to uses multiple reducers
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

