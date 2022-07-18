import Form from "../components/Form"

export default function Home() {
    return (<div className="main_home">
         <div className="title">
            <h1>HRnet</h1>
        </div>
        <div className="container">
            <a href="employee-list.html">View Current Employees</a>
            <h2>Create Employee</h2>
            <Form />
        </div>
        {/* <div id="confirmation" className="modal">Employee Created!</div> */}
    </div>)
}