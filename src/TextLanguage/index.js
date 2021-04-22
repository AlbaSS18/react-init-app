import React from 'react';
import LanguageContext from '../language.context'
import {useContext} from "react";

const Text = props => {

    const context = useContext(LanguageContext)
    console.log(context)

    return (
        <p>Hola mundo</p>
    )
}


export default Text;
