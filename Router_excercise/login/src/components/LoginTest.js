import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, validateYupSchema } from 'formik'
import * as Yup from 'yup'

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
    const loginSchema = Yup.object().shape({
        email: Yup.string()
        .email('Email không hợp lệ')
        .required('Bạn chưa điền email'),
        password: Yup.string()
            .min(3, 'Mật khẩu quá ngắn')
            .max(20, 'Mật khẩu quá dài')
            .required('Hãy nhập mật khẩu')
    })

       
    const handleSubmit = () => {
        navigate('/employee', {
            state: {
                email: form.email,
                password: form.password
            }
        })
    }
    const handleValidate = () => {
        const errors = {};
        let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!(regexEmail.test(form.email) && form.email==admin.email && form.password==admin.password)) {
            errors.acc = 'Tài khoản hoặc mật khẩu không đúng'
        }
        return errors
    }

    return (
        <div>
            <h2>Login your account</h2>

            <Formik
                initialValues={form}
                // validate={handleValidate}
                onSubmit={handleSubmit}
                // validationSchema={loginSchema}
            >
                {({values, errors, handleSubmit }) => (
                    
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email</label>
                            <input placeholder='Your email' name='email' onChange={setAcc} />
                            {/* <p className='error'>{errors.email}</p> */}
                        </div>
                        <div>
                            <label>Password</label>
                            <input placeholder='Your password' type='password'  name='password' onChange={setAcc} />
                            {/* <p className='error'>{errors.acc}</p> */}
                        </div>
                        
                        <button type='submit'>Đăng nhập</button>
                    </form>
                )}
            </Formik>
            
        </div>
    )
}
export default Login