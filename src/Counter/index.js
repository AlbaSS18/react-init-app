import React, {useState} from "react";

import ButtonCounter from '../ButtonCounter'
import Title from '../Title'

const Counter = () => {

    // Eliminamos el state y lo sustituimos por esto
    const [count, setCount] = useState(0)
    const [text, setText] = useState('No ha hecho ninguna acción');


    const handleClick = () => {
        setCount(count + 1)
        this.setState(prevState => ({count: prevState.count + 1}));
    }

    const handleChange = action => {
        setText(action);
        setCount(action === 'increment' ? count + 1 : count - 1);

        /*this.setState(prevState =>
            ({count: action === 'increment' ? prevState.count + 1 : prevState.count -1})
        )*/
    }

    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={handleClick}>Click me</button>

            <Title text={count}/>
            <Title text={text}/>
            <ButtonCounter onPress={() => handleChange ('increment') } label="Increment" />
            <ButtonCounter onPress={() => handleChange ('decrement') }  label="Decrement" />
        </div>
    )

}

export default Counter;
