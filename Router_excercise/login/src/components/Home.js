import { useLocation, useNavigate } from "react-router-dom"


function Home() {
    let navigate = useNavigate()
    let {state} = useLocation()
    const logOut = () => {
        navigate('/')
    }
    return (
        <div>
            <h3>Tài khoản của bạn:</h3>
            <p>Email: {state.email}</p>
            <p>Password: {state.password}</p>
            <button onClick={logOut}>Đăng xuất</button>
        </div>

    )
}

export default Home