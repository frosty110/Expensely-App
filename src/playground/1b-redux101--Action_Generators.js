
import {createStore } from 'redux';

const store = createStore( (state = {count: 0}, action) => {
    
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
});

const unsubscribe = store.subscribe(() => {
    console.log('subscribe: ', store.getState());
});


// Action generators - functions that return action objects
// set default value to empty
// const incrementCount = (payload= {} ) => ({
//     type: 'INCREMENT',
//     value: typeof payload.value === 'number' ? payload.value : 1
// });

//~~~~/// ALTERNATIVE WAY USING DESTRUCTURING: //~~~~~//
const incrementCount = ( {value=1}  = {} ) => ({
    /* understanding the perams:
        set value to 1 if no value in object params provided.
        set object to empty {} if no object provided in params which will set value to 1.
    */
    type: 'INCREMENT',
    value
});

const decrementCount = ( {value=1} = {} ) => ({
    type: 'DECREMENT',
    value
})

const resetCount = ( { value = 0} = {}) => ({
    type: 'RESET',
    value
})

store.dispatch(incrementCount());
store.dispatch(incrementCount( {value: 5} ));

store.dispatch(resetCount());
store.dispatch(resetCount( {value: 10} ));

store.dispatch(decrementCount());
store.dispatch(decrementCount( {value: 3} ));
