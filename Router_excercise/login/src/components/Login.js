import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState()
    const setAcc = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const admin = {
        email: 'admin@gmail.com',
        password: 'letmein'
    }
    const checkAcc = () => {
        let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (regexEmail.test(form.email) && form.email==admin.email && form.password==admin.password) {
            navigate('/employee', {
                state: {
                    email: form.email,
                    password: form.password
                }
            })
        }


        else { alert('Please enter right email and password') }
    }

    return (
        <>
            <h2>Login your account</h2>
            <label>Email</label> <br />
            <input placeholder='Your email' name='email' onChange={setAcc} /> <br />
            <label>Password</label><br />
            <input placeholder='Your password' type='password' name='password' onChange={setAcc} /><br />
            <input type='submit' onClick={checkAcc} />
        </>
    )
}
export default Login