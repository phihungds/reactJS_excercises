import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
        <div>
            <h1>User details</h1>
            <form>
                <div>
                    <label>Id</label>
                    <input name="id" value={user.id || ''} onChange={handleChange} />
                </div>
                <div>
                    <label>Name</label>
                    <input name="name" value={user.name || ''} onChange={handleChange} />
                </div>
                <div>
                    <label>Birthday</label>
                    <input type="date" name="birthday" value={user.birthday || ''} onChange={handleChange} />
                </div>
                <button type="button" onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    )
}
