import React, {useState} from 'react'
import {Formik} from 'formik'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  const regex = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    setForm({
      ...form, [event.target.name]: event.target.value
    })
  }

  const handleValidate = () => {
   const errors = {}
    if(!form.email) {
      errors.email = 'Please enter the email address'
    }
    else if (!regex.email.test(form.email)) {
      errors.email = 'Invalid email'
    }
    if (!form.title) {
      errors.title = 'Title required'
    }
    if (!form.message) {
      errors.message = 'Please enter the message'
    }
    return errors
  }

  const handleSubmit = () => {
    alert('Email sent success')
  }

  return (
    <div className='container'>
    <h1>Send Email</h1>
    <Formik
      initialValues={form}
      validate={handleValidate}
      onSubmit={handleSubmit}
      >
       {({values, errors, handleSubmit}) => (
         <form onSubmit={handleSubmit}>
           <div className='mb-3 col-sm-6'>
             <label className='form-label'>To</label>
             <input className='form-control' placeholder='Email address' name='email' onChange={handleChange} />
             <p className='error'>{errors.email}</p>
           </div>
           <div className='mb-3 col-sm-6'>
             <label className='form-label'>Title</label>
             <input className='form-control' placeholder='Title' name='title' onChange={handleChange} />
             <p className='error'>{errors.title}</p>
           </div>
           <div className='mb-3 col-sm-6'>
             <label className='form-label'>Message:</label>
             <textarea className='form-control row-sm-3' placeholder='Your message...' name='message' onChange={handleChange} />
             <p className='error'>{errors.message}</p>
           </div>
           <div className='mb-3 col-sm-6'>
             <input className='form-control' type='file' name='file' onChange={handleChange}/>
           </div>
           <button className='btn btn-primary mb-3' type='submit'>Send</button>
         </form>
       )}
    </Formik>
    </div>
  ) 
}
