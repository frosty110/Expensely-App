import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

test('should generate set end date action object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDate: moment(0)
    });
});

test('should generate set text filter action object', ()=>{
    const testText = 'rent';
    const action = setTextFilter(testText);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: testText
    });
});

test('should generate set default text filter action object', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate set sort by amount action object', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SET_SORT_BY',
        sortBy: 'amount'
    });
});

test('should generate setsort by date action object', ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SET_SORT_BY',
        sortBy: 'date'
    });
});
