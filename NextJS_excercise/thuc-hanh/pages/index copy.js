import styles from  '../styles/login.module.css';
import {useRouter} from 'next/router';
import Layout from './layout';
 
export default function Login({children}) {
    const router = useRouter()
    return (
        <div class={styles.wrapper}>
          <div>{children}</div>
            <div class={styles.formContent}>
                <h2>Login</h2>
                <form>
                    <input class={styles.input} type='text' id='login' name='login' placeholder='Username'/>
                    <input class={styles.input} type="text" id="password" name="login" placeholder="password" />
                    <button type="button" class={styles.button} onClick={() => router.push('/home')}>Log In</button>
                </form>
            </div>
        </div>
    )
} 
