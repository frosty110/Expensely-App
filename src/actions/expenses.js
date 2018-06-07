import uuid from 'uuid';
import database from '../firebase/firebase'
/*
    component calls action generator
    action generator will return a function
    component dispatches function
    function runs - has the ability ot dispatch other actions and do whatever it wants
*/

// ADD EXPENSE
export const addExpense = ( expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    };
};


// returns the function for dispatch
export const startAddExpense = (expenseData={}) => {
    return (dispatch) => {
        const {
            description='', 
            note='', 
            amount=0, 
            createdAt=0
        } = expenseData;

        const expense = {description, note, amount, createdAt};

        // return this so we can attach a promise chain for the test case
        return database.ref('expenses').push(expense)
            .then( (ref)=> {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            });
    };
};


// REMOVE EXPENSE
export const removeExpense = ( {id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({id}={}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove()
            .then(() => {
                dispatch(removeExpense({
                    id
                }));
            });
    };
};

// EDIT EXPENSE
export const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch => {
        const expensePath = `expenses/${id}`;
        return database.ref(expensePath).update(
            updates
        ).then(()=>{
            dispatch(editExpense(id, updates));
        });
    });
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach(childSnapshot => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            
            dispatch(setExpenses(expenses));
        });
    };
};
