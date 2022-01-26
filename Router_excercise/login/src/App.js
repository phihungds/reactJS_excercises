import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Employees from "./components/Employees";
import EmployeeDetail from "./components/EmployeeDetail";
function App() {
  return (
    <BrowserRouter>

      <div className="main-route-place">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/employee" element={<Employees />} />
           <Route path="/employee-detail" element={<EmployeeDetail />} /> 
        </Routes>
        </div>
    </BrowserRouter>
  )
}
export default App;
