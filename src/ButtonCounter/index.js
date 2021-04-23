import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    background-color: red;
    padding: 10px;
    border: 2px solid red
`

const ButtonCounter = props => <ButtonStyle onClick={props.onPress}>{props.label}</ButtonStyle>


export default ButtonCounter;
