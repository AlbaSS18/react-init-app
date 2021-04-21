import Text from "./index";
import {mount} from "enzyme";

test('Should render without errors',() => {
    mount(<Text/>)
})

test('Should render an a tag',() => {
    const wrapper = mount(<Text/>);
    expect(wrapper.find('a').length).toBe(1);
})
