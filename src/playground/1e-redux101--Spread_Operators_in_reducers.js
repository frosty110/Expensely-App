import {createStore, combineReducers } from 'redux';
import uuid from 'uuid'; // used to create unique ID


// ADD EXPENSE
const addExpense = ( 
    { 
        description='', 
        note='', 
        amount=0, 
        createdAt=0
    } = {}
) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(), // used to create unique ID
            description,
            note,
            amount,
            createdAt
        }
    };
};


// REMOVE EXPENSE
const removeExpense = ( {id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const expensesReducerDefaultState = [];
const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            // spread operator. Makes it easy to concat values into an array and get a new array 
            // * doesn't affect the old array which is what we WANT
            return [...state, action.expense]; 
        case 'REMOVE_EXPENSE':
            return state.filter( ({id}) => action.id !== id);
        default:
            return state;
    }
};

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

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);


store.subscribe( () =>{
    console.log(store.getState());
});

// calling the store dispatch to add an expense
const expenseOne = store.dispatch(addExpense( {description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense( {description: 'Coffee', amount: 300}));

// calling the store dispatch to remove an expense
store.dispatch(removeExpense({id: expenseOne.expense.id}));



const user = {
    name: 'jen',
    age: 24
}

consol.log({
    ...user
})