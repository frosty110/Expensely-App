import {createStore, combineReducers } from 'redux';
import uuid from 'uuid';
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

// EDIT EXPENSE
const editExpense = ( {id, updates} ={} ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

/* Actions
    ADD, remove, edit Expense
    set text filter, sort by date, sort by amount, set start/end date
    A lot of options.
*/

const expensesReducerDefaultState = [];
const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            // Array Spread operator. Makes it easy to concat values into an array and get a new array 
            // * doesn't affect the old array which is what we WANT
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter( ({id}) => action.id !== id);
        case 'EDIT_EXPENSE':
            return state.map( (expense)=> {
                if (expense.id === action.id){
                    // object Spread operator. Makes it easy to combine objects/object elements and get a new object returned 
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    expense;
                }
            });
        default:
            return state;
    }
};

/* FILTERs ACTION GENERATORS */
const setTextFilter = ({text=''}={}) => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    };
};

const sortByAmount = () => ({
    type: 'SET_SORT_BY',
    sortBy: 'amount'
})
const sortByData = () => ({
    type: 'SET_SORT_BY',
    sortBy: 'date'
})

const setStartDate = ( startDate) =>{
    return {
        type: 'SET_START_DATE',
        startDate
    };
};

const setEndDate = ( endDate ) =>({
    type: 'SET_END_DATE',
    endDate
});

// filter reducers
const filtersReducerDefaultState = {
    text : '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

// Get visible expense
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter( (expense) => {
        const startDateMatch = typeof startDate != 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate != 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toUpperCase().includes(text.toUpperCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort( (a,b) => {
        if (sortBy == 'date') {
            // if return value is less than 0, a is a lower index than b. a comes first
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy == 'amount'){
            return a.amount > b.amount ? -1 : 1;
        } else {
            console.log('unknown sort');
        }
    });
};

//store creation using combineReducers which allows us to uses multiple reducers
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);




const expenseOne = store.dispatch(addExpense( {description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense( {description: 'Coffee', amount: 300, createdAt: -1000}));
const expense3 = store.dispatch(addExpense( {description: 'Car rental', amount: 3000, createdAt: 21000}));
const expense4 = store.dispatch(addExpense( {description: 'gum', amount: 3, createdAt: 210}));
// console.log(expenseOne);
// console.log(expenseTwo);
store.subscribe( () =>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(state);
    console.log(visibleExpenses);
});
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense({id: expenseTwo.expense.id, updates: { amount: 500 } }));

// store.dispatch(setTextFilter({text: 'rent'}));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByData());
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(999));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

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
