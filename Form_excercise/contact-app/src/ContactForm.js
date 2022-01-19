import React, { useState } from 'react';
import { Formik } from 'formik';

export default function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const regex = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/
    }

    const handleChange = (event) => {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
    }
    const handleValidate = () => {
        let errors = {}
        if (!form.name) {
            errors.name = 'Name have at least 3 letters'
        }
        if (!form.email) {
            errors.email = 'Email Required'
        }
        else if (!regex.email.test(form.email)) {
            errors.email = 'Invalid Email'
        }

        if (!form.phone) {
            errors.phone = 'Phone Required'
        }
        else if (!regex.phone.test(form.phone)) {
            errors.phone = "Invalid Vietnam's phone number"
        }
        if (!form.message) {
            errors.message = 'Message have at least 20 letters'
        }
        return errors
    }
    const handleSubmit = () => {
        alert('Success')
    }
    return (
        <div>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}>


                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name</label>
                            <input placeholder='Enter your name' onChange={handleChange} value={form.name || ''} name='name' />
                            <p className='error'>{errors.name}</p>
                        </div>
                        <div>
                            <label>Email</label>
                            <input placeholder='Enter your email' onChange={handleChange} name='email' />
                            <p className='error'>{errors.email}</p>
                        </div>
                        <div>
                            <label>Phone</label>
                            <input placeholder='Enter your phone' onChange={handleChange} name='phone' />
                            <p className='error'>{errors.phone}</p>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea placeholder='Enter your message' onChange={handleChange} name='message' />
                            <p className='error'>{errors.message}</p>
                        </div>

                        <button type='Submit'>Submit</button>
                    </form>
                )}

            </Formik>
        </div>
    )

}