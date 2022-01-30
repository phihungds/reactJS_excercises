import React, {useState} from 'react'
import {Formik} from 'formik'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';

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
             
             <TextField id="email" label="Send to" variant="outlined" onChange={handleChange} name='email' fullWidth />
             <p className='error'>{errors.email}</p>
           </div>
           <div className='mb-3 col-sm-6'>
             
           <TextField id="title" label="Title" variant="outlined" onChange={handleChange} name='title' fullWidth />
             <p className='error'>{errors.title}</p>
           </div>
           <div className='mb-3 col-sm-6'>
           <TextField id="fullWidth" label="Message"  variant="outlined" onChange={handleChange} name='message' multiline rows={4} fullWidth/>
             
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
