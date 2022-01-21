import { Formik } from 'formik';
import React, {useState} from 'react';
import './App.css';

export default function App() {
  const [books, setBooks] = useState([])
  const [form, setForm] = useState({})
  const [indexSelected, setIndexSelected] = useState(-1)

  const handleChange = (event) => {
    setForm({
      ...form, [event.target.name] : event.target.value
    })
  }
  const handleValidate = () => {
    let errors = {};
    if (!form.title) {
      errors.title = 'Hãy điền tiêu đề sách'
    }
    if (!form.number) {
      errors.number = 'Hãy điền số lượng sách'
    }
  }

  const handleSelect = (book, index) => {
    setForm(book);
    setIndexSelected(index)
  }
  const handleDelete = (index) => {
    const newBooks = JSON.parse(JSON.stringify(books))
    newBooks.splice(index, 1)
    setBooks(newBooks)
  }
  const handleSubmit = () => {
    const newBooks = JSON.parse(JSON.stringify(books))
    if (indexSelected>-1) {
      newBooks.splice(indexSelected, 1, form)
    }
    else {
      newBooks.push(form)
    }
    setBooks(newBooks)
    setForm({})
    setIndexSelected(-1)
  }

    return (
      <div className='container'>
        <h1>Thư viện</h1>
        <Formik
          initialValues={form}
          validate={handleValidate}
          onSubmit={handleSubmit}>
            {({errors, handleSubmit}) =>(
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Tiêu đề</label>
                  <input name='title' value={form.title || ''} onChange={handleChange} />
                  <p className='error'>{errors.title}</p>
                </div>
                <div>
                  <label>Số lượng</label>
                  <input name='number' value={form.number || ''} onChange={handleChange} />
                  <p className='error'>{errors.number}</p>
                </div>
                <button type='submit'>Submit</button>
              </form>
            )}
          </Formik>

          <table>
            <thead>
              <tr>
                <th>Tiêu đề</th>
                <th>Số lượng</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.number}</td>
                  <td>
                    <button onClick={handleSelect.bind(this, book, index)}>Sửa</button>
                    <button onClick={handleDelete.bind(this, index)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        
      </div>
    )


}