import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done)=> {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt }) => {
        expensesData[id] = {description, note, amount, createdAt};
    });

    database.ref('expenses').set(expensesData).then(()=> done());
});

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
    const action = addExpense(expenses[2]);
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'this one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }    
        });

        // promise chain
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done(); // forces jest to wait until this gets hit to validate the async method
    });
});

test('should add expense with default values to database and store', (done) => {
    const store = createMockStore({});
    const defaultExpenseData = {
        description: '', 
        amount: 0, 
        note: '', 
        createdAt: 0
    };
    store.dispatch(startAddExpense(defaultExpenseData)).then(() => {
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultExpenseData
            }    
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(defaultExpenseData);
        done();
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', () => {
    const store = createMockStore();
    store.dispatch(startSetExpenses()).then(() =>{
        const actions = store.getActions();
        expect(actions[0]).equalTo({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});