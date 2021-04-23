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
    background-color: ${props => props.theme.main || 'papayawhip'};
    border-color: ${props => props.theme.main || 'papayawhip'};
`




export default TomatoButton;
