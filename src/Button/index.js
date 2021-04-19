const Button = () => {

    const handleClick = () => console.log('se ha clickado el botón')

    return <button onClick={handleClick}>Click me</button>
}

export default Button;
