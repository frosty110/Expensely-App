import React from 'react';
import ExpenseDashBoard from '../../components/ExpenseDashBoard';
import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme';



test('should render ExpenseDashBoard', () => {
    const wrapper = shallow(<ExpenseDashBoard  />);
    expect(wrapper).toMatchSnapshot();
});

