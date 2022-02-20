import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function UserDetails() {
    const { userId } = useParams()
    const isCreate = !userId
    const [user, setUser] = useState({})

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:3001/api/user/details/${userId}`)
                .then((res) => {
                    setUser(res.data)
                })
                .catch((err) => { console.log(err) })
        }
    }, [userId])

    function handleChange(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/api/user', user)
            .then((res) => {
                alert(`${isCreate ? 'Create' : 'Edit'} user success`)
            })
    }

    return (
        <div className="container">
            <h1>User details</h1>
            <form className="form-row">
                <div className="form-group col-md-6">
                    <label>Id</label>
                    <input className="form-control" name="id" value={user.id || ''} onChange={handleChange} />
                </div>
                <div className="form-group col-md-6">
                    <label>Name</label>
                    <input className="form-control" name="name" value={user.name || ''} onChange={handleChange} />
                </div>
                <div className="form-group col-md-6">
                    <label>Birthday</label>
                    <input className="form-control" type="date" name="birthday" value={user.birthday || ''} onChange={handleChange} />
                </div>
                <button className="btn btn-success" type="button" onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    )
}
