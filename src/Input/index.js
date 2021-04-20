import * as React from "react";

class Input extends React.Component {

    state = {
        message: ''
    }

    interval = null;

    componentDidMount() {
        console.log('montado')
        this.interval = setInterval(() => console.log('hola'),1000)
    }

    componentWillUnmount() {
        console.log('desmontado')
        clearInterval(this.interval);
    }


    handleChange = (event) => {
        this.setState({message: event.target.value})
    }

    render () {
        return (
            <>
                <h1>{this.state.message}</h1>
                <input type="text" onChange={this.handleChange}/>
            </>
        )
    }
}

export default Input;
