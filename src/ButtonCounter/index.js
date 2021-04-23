import React from 'react';
import styled, {css} from 'styled-components';

const ButtonCounter = styled.button`
    background-color: yellow;
    padding: 10px;
    border: 2px solid yellow;
    /*color: ${props => props.color || 'green'}*/
    
    ${props => props.info && css`
        background-color: blue;
        border: 2px solid blue;
        color: white
    `}
    
    ${props => props.warning && css`
        background-color: orange;
        border: 2px solid orange;
        color: white
    `}
    
    ${props => props.danger && css`
        background-color: red;
        border: 2px solid red;
        color: white
    `}
    
    ${props => props.success && css`
        background-color: green;
        border: 2px solid green;
        color: white
    `}
`

/*
const ButtonCounter = props => <ButtonStyle onClick={props.onPress}>{props.label}</ButtonStyle>
*/


export default ButtonCounter;
