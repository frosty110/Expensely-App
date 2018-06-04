// react-test-renderer

import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Head correctly', ()=>{
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
})