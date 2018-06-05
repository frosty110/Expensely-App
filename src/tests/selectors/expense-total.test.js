import selectExpenseTotal from '../../selectors/expenses-total.js';

import expenses from '../fixtures/expenses';



// const total = getExpensesTotal(expenses);
// console.log(total);

test('should return 0 if no expenses', ()=> {
    const res = selectExpenseTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', ()=> {
    
    const res = selectExpenseTotal([expenses[0]]);
    expect(res).toBe(1500);
});


test('should correctly add up a multiple expense', ()=> {
    const res = selectExpenseTotal(expenses);
    expect(res).toBe(6539);
});