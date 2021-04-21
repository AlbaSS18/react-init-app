import * as React from "react";

import ButtonCounter from '../ButtonCounter'
import Title from '../Title'

class Counter extends React.Component {

    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(prevState => ({count: prevState.count + 1}));
    }

    handleChange = action => {
        this.setState(prevState =>
            ({count: action === 'increment' ? prevState.count + 1 : prevState.count -1})
        )
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.count}
                </h1>
                <button onClick={this.handleClick}>Click me</button>

                <Title text={this.state.count}/>
                <ButtonCounter onPress={() => this.handleChange ('increment') } label="Increment" />
                <ButtonCounter onPress={() => this.handleChange ('decrement') }  label="Decrement" />
            </div>
        )
    }

}

export default Counter;
