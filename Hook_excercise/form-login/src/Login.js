import { useState } from 'react';

function Login() {
    const [account, setAccount] = useState({
        username: '',
        password: ''
    })

    const updateAccount = (key, value) => {
        let loginAccount = {...account,[key]: value  }
        setAccount(loginAccount)
    }
    const displayAcc = ()=> {
        document.getElementById('display').innerHTML = `<h3>Your account: </h3>  <h4>Username: ${account.username}</h4><h4>Password: ${account.password}</h4>`
    }
    return (
        <div>
            <div>
                <input
                    type='text'
                    placeholder='Enter your username'
                    onChange={
                        (e) => { updateAccount('username', e.target.value) }} />
                <br />
                <input
                    type='password'
                    placeholder='Enter your password'
                    onChange={
                        (e) => { updateAccount('password', e.target.value) }} /> <br />
                <button onClick={displayAcc}>Login</button>
            </div>
            <div id='display'>
                
            </div>

        </div>


    )
}

export default Login