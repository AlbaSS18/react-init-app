import Button from "../Button";
import React from 'react';
import styled, {keyframes} from "styled-components";
import ButtonCounter from "../ButtonCounter";

const rotate = keyframes`
   from {
         transform: rotate(0deg)
   }
   
   to {
         transform: rotate(360deg)
   }
`
const TomatoButton = styled(ButtonCounter)`
    background-color: tomato;
    border-color: tomato;
    animation: ${rotate} 2s linear infinite
`




export default TomatoButton;
