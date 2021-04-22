const LanguageSelector = props =>
    <>
        <button onClick={() => props.changeLanguage('en')}>English</button>
        <button onClick={() => props.changeLanguage('es')}>Spanish</button>
    </>


export default LanguageSelector;
