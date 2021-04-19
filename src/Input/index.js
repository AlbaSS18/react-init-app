import * as React from "react";

class Input extends React.Component {

    state = {
        message: ''
    }

    componentDidMount() {
        console.log('montado')
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
