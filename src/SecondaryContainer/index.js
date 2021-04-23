import React from 'react'
import LanguageSelector from "../LanguageSelector";
import {useContext} from "react";
import LanguageContext from './../language.context'

const SecondaryContainer = () => {

    const context = useContext(LanguageContext);

    return (
        <div>
            <LanguageSelector changeLanguage={language => context.changeLanguage(language)}/>
        </div>
    )
}

export default SecondaryContainer;
