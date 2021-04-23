import styled from "styled-components";
import LanguageContext from "../language.context";
import React from "react";


const TextStyle = styled.p`
    font-size: 15px;
    color: ${props => props.theme.main}
`


export default TextStyle;
