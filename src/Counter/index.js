import * as React from "react";

class Counter extends React.Component {

    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(prevState => ({count: prevState.count + 1}));
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.count}
                </h1>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }

}

export default Counter;
