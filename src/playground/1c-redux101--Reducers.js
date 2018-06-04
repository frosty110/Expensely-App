
import {createStore } from 'redux';

/* Reducers
    1. Reducers are pure functions
    2. Never directly change state or action
*/
const countReducer = (state = {count: 0}, action={}) => {
    const value = (typeof action.value === 'number') ? action.value : 1;
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + value
            };
        case 'DECREMENT':
            return {
                count: state.count - value
            };
        case 'RESET':
            return {
                count: value
            };
        default:
            return state;
    }
    return state;
};

const store = createStore( countReducer );

const unsubscribe = store.subscribe(() => {
    console.log('subscribe: ', store.getState());
});

const incrementCount = ( {value=1}  = {} ) => ({
    type: 'INCREMENT',
    value
});

const decrementCount = ( {value=1} = {} ) => ({
    type: 'DECREMENT',
    value
});

const resetCount = ( { value = 0} = {}) => ({
    type: 'RESET',
    value
});

store.dispatch(incrementCount());
store.dispatch(incrementCount( {value: 5} ));

store.dispatch(resetCount());
store.dispatch(resetCount( {value: 10} ));

store.dispatch(decrementCount());
store.dispatch(decrementCount( {value: 3} ));
