import ProductsPage from "./index";
import React from "react";
import {shallow} from "enzyme";

test('Should render without errors', () => {
    shallow(<ProductsPage />)
})
