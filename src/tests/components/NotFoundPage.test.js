import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';
import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme';



test('should render NotFoundPage', () => {
    const wrapper = shallow(<NotFoundPage  />);
    expect(wrapper).toMatchSnapshot();
});