import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', ()=> {
    const state = filtersReducer(undefined, {type: 'SET_SORT_BY', sortBy: 'amount'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', ()=> {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy:'amount'
    };
    const action = {type: 'SET_SORT_BY', sortBy: 'date'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', ()=>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy:'amount'
    };
    const action = {type: 'SET_TEXT_FILTER', text: 'rental'};
    const state = filtersReducer(currentState, action);
    expect(state).toEqual({...currentState, text: action.text});
});

test('should set startDate filter', ()=>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy:'amount'
    };
    const time = moment();
    const action = {type: 'SET_START_DATE', startDate: time};
    const state = filtersReducer(currentState, action);
    expect(state).toEqual({...currentState, startDate: time});
});

test('should set endDate filter', ()=>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy:'amount'
    };
    const action = {type: 'SET_END_DATE', endDate: moment(0).valueOf()};
    const state = filtersReducer(currentState, action);
    expect(state).toEqual({...currentState, endDate: action.endDate});

});