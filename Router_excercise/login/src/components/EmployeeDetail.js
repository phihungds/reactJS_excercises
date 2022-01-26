import {useNavigate, useLocation} from 'react-router-dom';


function EmployeeDetail () {
    let navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    let {state} = useLocation()
    return (
        <div>
        <h4>{state.id} : {state.name} {state.age}</h4>
        <button onClick={back}>Back</button>
        </div>
    )
}
export default EmployeeDetail