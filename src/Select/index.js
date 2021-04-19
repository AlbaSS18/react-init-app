const Select = () => {

    const handleChange = (event) => {
        console.log(event.target.value)
        console.log('ha cambiado');
    }

    return (
        <select onChange={handleChange}>
            <option>
                Spanish
            </option>
            <option>
                English
            </option>
            <option>
                German
            </option>
        </select>
    )
}

export default Select;
