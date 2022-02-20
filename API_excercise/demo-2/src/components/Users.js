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

    handleCreate = () => {
        window.location.href = '/user/add'
      }
      
    render() {
        const { users } = this.state;
        return (
            <div className='container'>
                <h2>Users list</h2>

                {users.map((user) => (
                    <div key={user.id}>
                        <a href={`/user/${user.id}`}>{user.name} </a>
                    </div>
                ))}
                <button type='button' onClick={this.handleCreate}>Create</button>
            </div>
        )
    }

}

export default Users;