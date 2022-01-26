import { useNavigate } from "react-router-dom"

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
    const goToDetail = (e) => {
        let emindex = e.target.value
        navigate('/employee-detail', {state: employees[emindex]})
    }
    return (
        <>
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
        </table></>
    )
}

export default Employees