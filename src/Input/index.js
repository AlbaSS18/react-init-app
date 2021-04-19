import * as React from "react";

class Input extends React.Component {

    handleChange = (event) => {
        console.log(event.target.value);
    }

    render () {
        return (
            <input type="text" onChange={this.handleChange}/>
        )
    }
}

export default Input;
