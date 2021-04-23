import React from 'react';
import LanguageContext from '../language.context'
import {useContext} from "react";

const Text = props => {

    const context = useContext(LanguageContext)
    console.log(context)

    return (
        <p>{context.language === 'es' ? 'Hola mundo!' : 'Hello World!'}</p>
    )
}


export default Text;
