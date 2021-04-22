import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";
import useRequest from "../hooks/useRequest";

const UsersList = () => {

    const users = useRequest('https://mocki.io/v1/934ead60-e5e3-44ea-8c47-733630e16348');


    /*async componentDidMount() {
        const users = await this.fetchUsers();
        this.setState({users});
    }*/
    if(!users)
        return 'Loading...'

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )

    /*render () {

        if(!this.state.users)
            return 'Loading...'

        return (
            <ul>
                {this.state.users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        )
    }*/
}

export default UsersList;
