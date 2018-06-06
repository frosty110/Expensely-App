
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
                  return expense;
                };
            });
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};