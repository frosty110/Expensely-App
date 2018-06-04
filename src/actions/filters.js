
/* FILTERs ACTION GENERATORS */
export const setTextFilter = (text='') => { //{text=''}={}
    return {
        type: 'SET_TEXT_FILTER',
        text
    };
};

export const sortByAmount = () => ({
    type: 'SET_SORT_BY',
    sortBy: 'amount'
});

export const sortByDate = () => ({
    type: 'SET_SORT_BY',
    sortBy: 'date'
});

export const setStartDate = ( startDate) =>{
    return {
        type: 'SET_START_DATE',
        startDate
    };
};

export const setEndDate = ( endDate ) =>({
    type: 'SET_END_DATE',
    endDate
});