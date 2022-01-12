import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    
    const displayAcc = ()=> {
        document.getElementById('display').innerHTML = `<h3>Your account: </h3>  <h4>Username: ${username}</h4><h4>Password: ${pass}</h4>`
    }
    return (
        <div>
            <div>
                <input
                    type='text'
                    placeholder='Enter your username'
                    onChange={
                        (e) => { setUsername(e.target.value) }} />
                <br />
                <input
                    type='password'
                    placeholder='Enter your password'
                    onChange={
                        (e) => { setPass(e.target.value) }} /> <br />
                <button onClick={displayAcc}>Login</button>
            </div>
            <div id='display'>
                
            </div>

        </div>


    )
}

export default Login