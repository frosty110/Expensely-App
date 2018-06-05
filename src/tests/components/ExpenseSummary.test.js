import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../Components/ExpenseSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23523123}/>);
    expect(wrapper).toMatchSnapshot();
});