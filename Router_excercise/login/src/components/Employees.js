import { useLocation, useNavigate } from "react-router-dom"

const employees = [
    {
        id: 1,
        name: "Hoa",
        age: 20
    },
    {
        id: 2,
        name: "Khánh",
        age: 25
    },
    {
        id: 3,
        name: "Tú",
        age: 22
    },
]

function Employees () {
    let navigate = useNavigate()
    let {state} = useLocation()
    const goToDetail = (e) => {
        let emIndex = e.target.value
        navigate('/employee-detail', {state: employees[emIndex]})
    }
    const back = () => {
        navigate(-1)
    }
    return (
        <>
        <h2>Welcome {state.email}</h2>
        <table>
            <thead>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Age</th>
            </thead>
            <tbody>
                {employees.map((employee, index) => (
                    <tr>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td><button value={index} onClick={goToDetail}>Detail</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button onClick={back}>Đăng xuất</button>
        </>
    )
}

export default Employees