import * as React from "react";

class UsersList extends React.Component {
    state = {
        users: null
    }

    fetchUsers = async () => {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users');
        const data = await  response.json();
        return data;
    }

    async componentDidMount() {
        const users = await this.fetchUsers();
        this.setState({users});
    }

    render () {

        if(!this.state.users)
            return 'Loading...'

        return (
            <ul>
                {this.state.users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        )
    }
}

export default UsersList;
