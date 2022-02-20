import React, { Component } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

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
            <div className='user-detail container pt-5'>
                <table className='table table-striped table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>STT</th>
                            <th>Họ và tên</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td><a href={`/user/${user.id}`}><button className='btn btn-success'>Edit</button></a></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <button className='btn btn-primary' onClick={this.handleCreate}>Create</button>
            </div>
        )
    }
}
export default Users