import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', ()=> {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
    // const action = {type: 'ADD_EXPENSE', expense: expenses[0] }
    // const state = expenseReducer(undefined, )
});

test('should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if no id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

// ADD_EXPENSE
// EDIT_EXPENSE
test('should add expense', ()=>{
    const testExpense = {
        id : 4,
        description : 'some descipt',
        amount : 10
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: testExpense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, testExpense ]);
});

test('should edit an expense', ()=>{
    expenses[1].description = 'something new';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        expense: expenses[1]
    };
    
    const state = expensesReducer(expenses, action);
    expect(state[1]).toEqual(expenses[1]);
});

test('should not edit an expense if no id', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1'
    };
    
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
