import moment from 'moment';

// Get visible expense - apply filters to expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter( (expense) => {
        
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

        const textMatch = expense.description.toUpperCase().includes(text.toUpperCase());

        return startDateMatch && endDateMatch && textMatch;

    }).sort( (a,b) => {
        if (sortBy === 'date') {
            // if return value is less than 0, a is a lower index than b. a comes first
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        } else {
            console.log('unknown sort');
        }
    });
};

export default getVisibleExpenses;