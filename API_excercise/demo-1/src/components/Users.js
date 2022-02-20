import React, { Component } from 'react';
import axios from 'axios'
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/user/list')
            .then((res) => {
                console.log(this)
                this.setState({ users: res.data })
            })
            .catch((err) => { console.log(err) })
    }
    render() {
        const { users } = this.state;
        return (
            <div className='container'>
                <h2>Users list</h2>
                <ul>
                    {users.map((user) => (
                        <li key={user.id} > {user.name} </li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default Users;