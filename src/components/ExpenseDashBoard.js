import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseSummary/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashBoardPage;