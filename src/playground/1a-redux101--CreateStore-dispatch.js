

// createStore is what tracks are changing data.
import {createStore } from 'redux';

// inital call, there is no state, so we init the count to 0. Setting it = to {count:0} is declaring the default state
const store = createStore( (state = {count: 0}, action) => {
    
    const value = (typeof action.value === 'number') ? action.value : 1;
    // console.log( action.type, typeof action.incrementBy, (typeof action.incrementBy === 'number'), incrementBy);

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + value
            };

        case 'DECREMENT':
            return {
                count: state.count - value
            };

        case 'SET':
            return {
                count: value
            };

        case 'RESET':
            return {
                count: 0
            };

        default:
            return state;

    }
    
    console.log('running');
    return state;
});

//store listener called anytime an action is dispatched or some part of the state tree is changed
const unsubscribe = store.subscribe(() => {
    console.log('subscribe: ', store.getState());
});



//next objectives: increment the count. reset the count to zero.

// actions are object that get sent to the store. ie: walk, stop_walking, sit, work, stop_working. 
// This is how we communicate with the store


console.log(store.getState());

// actions: increment the count
store.dispatch({
    type:'INCREMENT',
    value: 5
});
console.log(store.getState());

unsubscribe();

// actions: reset the count
store.dispatch({
    type:'RESET'
});
console.log(store.getState());

// actions: drecrease the count
store.dispatch({
    type:'DECREMENT',
    value: 10
});
console.log(store.getState());

// actions: set the count value
store.dispatch({
    type:'SET',
    value: 109
});
console.log(store.getState());