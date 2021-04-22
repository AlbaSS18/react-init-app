import React from "react";

import ButtonCounter from '../ButtonCounter'
import Title from '../Title'
import {useState} from "react/cjs/react.production.min";

const Counter = () => {

    // Eliminamos el state y lo sustituimos por esto
    const [count, setCount] = useState(0)


    const handleClick = () => {
        setCount(count + 1)
        // this.setState(prevState => ({count: prevState.count + 1}));
    }

    const handleChange = action => {
        setCount(action === 'increment' ? count + 1 : count - 1)

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
            <ButtonCounter onPress={() => handleChange ('increment') } label="Increment" />
            <ButtonCounter onPress={() => handleChange ('decrement') }  label="Decrement" />
        </div>
    )

}

export default Counter;
