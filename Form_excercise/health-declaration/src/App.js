import { Formik } from 'formik'
import './App.css';
import React, { useState } from 'react';

export default function App() {
  const genderList = [
    { label: 'Nam', value: 'male' },
    { label: 'Nữ', value: 'female' }]
  const [form, setForm] = useState({})
  const handleChange = (event) => {
    let value = event.target.type ==='checkbox' ? form[event.target.name] : event.target.value;
    setForm({...form, [event.target.name]: value})
  }


  return (
   
  );
}

