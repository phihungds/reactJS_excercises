import React, { Component, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [], loading: false };
    }
    componentDidMount() {
        this.setState({loading:true}) 
        this.getUsers()
      .then((res) => { this.setState({ users: res.data }) })
      .catch((err) => { throw err })
      .finally(() => { this.setState({loading: false}) })
        // axios.get('http://localhost:3001/users')
        //     .then((res) => {
        //         this.setState({ users: res.data})
        //     })
        //     .catch((err) => { console.log(err) })
    }
    getUsers = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            axios.get('http://localhost:3001/users')
              .then((res) => { resolve(res) })
              .catch((err) => { reject(err) })
          }, 1000);
        })
      }

    handleCreate = () => {
        window.location.href = '/user/add'
    }
   handleDelete =(e) => {
    
    axios.delete(`http://localhost:3001/users/${e.target.id}`)
    .then((res) => {
        // this.setState({ users: res.data})
    })
    .catch((err) => {console.log(err)})
    }

    render() {
        const { users, loading } = this.state;
        if (loading) return (<h3 className='loading'>Loading users...</h3>)
        return (
            <div className='user-detail container pt-5'>
                <table className='table table-striped table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>STT</th>
                            <th>Họ và tên</th>
                            <th>Địa chỉ</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.address}</td>
                                    <td><a href={`/user/${user.id}`}><button className='btn btn-success' >Edit</button></a><button className='btn btn-danger' id={user.id} onClick={this.handleDelete}>Delete</button></td>
                                    
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