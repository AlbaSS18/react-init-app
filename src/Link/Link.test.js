import {shallow} from "enzyme/build";
import Link from "."
import React from "react";

test('Should render without errors', () => {
    shallow(<Link />)
})

test('Should render a link', () => {
    const wrapper = shallow(<Link />)
    expect (wrapper.find('a').length).toBe(1)
})

test('Should render a link with href', () => {
    const wrapper = shallow(<Link to="https://google.com"/>)
    expect (wrapper.find('a').prop('href')).toBe("https://google.com")
})
