// React 
import { NavLink } from "react-router-dom";
// Components 
import Form from "../components/Form"


export default function Home() {
    return (<div className="main_home">
         <div className="title">
            <h1>HRnet</h1>
        </div>
        <div className="container">
        <NavLink to="/employee">
            View Current Employees
            </NavLink>
            <h2>Create Employee</h2>
            <Form />
        </div>
    </div>)
}