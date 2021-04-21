import Text from "./index";
import {mount, render} from "enzyme";

test('Should render without errors',() => {
    render(<Text/>)
})

test('Should render an a tag',() => {
    const wrapper = render(<Text/>);
    expect(wrapper.find('a').length).toBe(1);
})
