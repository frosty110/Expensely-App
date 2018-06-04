import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const expenseUpdate = {note: 'new note!'};
    const action = editExpense({ id: '123abc', updates: expenseUpdate });
    
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: expenseUpdate
    })
});

test('should setup add expense action object with new values', () => {
    const expenseAdd = {amount: 10950, createdAt: 100, description: "rent", note: "I didn't want to pay it. :("};
    const action = addExpense(expenseAdd);
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {...expenseAdd, id: expect.any(String)}
    })
});

test('should setup add expense action object with default values', () => {
    const defaultExpenseData = {amount: 0, createdAt: 0, description: "", note: ""};
    const action = addExpense();
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {...defaultExpenseData, id: expect.any(String)}
    })
});