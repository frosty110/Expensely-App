import moment from 'moment';

const expenseFactory  = (id, description, note, amount, createdAt) => {
    return {
        id, description, note, amount, createdAt
    };
};

export default [
    expenseFactory('1', 'rent', 'rent for may', 1500, 0),
    expenseFactory('2', 'cofee', 'starbucks', 5, moment(0).subtract(4,'days').valueOf()),
    expenseFactory('3', 'credit card', 'citi bank', 5034, moment(0).add(4,"days").valueOf())
];