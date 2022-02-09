import Link from 'next/link'
import styles from '../styles/Login.module.css'
import {useRouter} from 'next/router';
import 'bootstrap/dist/css/bootstrap.css'

export default function Login() {
  const router = useRouter()
  return (
    <div>
      <div className={styles.formLogin}>
        <h2>Login</h2>
        <form>
          <input className='form-control' placeholder='Username' type='text'   />
          <input className='form-control' placeholder='Password' type='text'  />
          <button type='button' className='btn btn-primary' onClick={()=> router.push('/home')}>Log In</button>
        </form>
      </div>
    </div>
  )
}
