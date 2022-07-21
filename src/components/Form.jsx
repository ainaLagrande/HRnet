// React 
import { useState } from "react";
import DatePicker from 'react-datepicker';
import Select from "react-select";
import 'react-datepicker/dist/react-datepicker.css';
// Data 
import { department, state } from "../data/data";
// Components 
import ModalForm from "./Modal";

export default function Form() {

    const [stateForm, setStateForm] = useState({})
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())

    return(
        <div className='form'>
            <form id="employeeCreate" >
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type='text' id="firstName" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type='text' id="lastName" />
                </div>
                <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <DatePicker id="dateOfBirth" selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)} />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <DatePicker id="startDate" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <fieldset>
                    <legend>Address</legend>
                    <div className="form-group">
                        <label htmlFor="street">Street</label>
                        <input type='text' id="street" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type='text' id="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <Select id="state" options={state} onChange={(e) => setStateForm({ ...stateForm, stateAddress: e.value })} defaultValue={null} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type='number' id="zipCode" />
                    </div>
                </fieldset>
                <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <Select id="department" options={department} onChange={(e) => setStateForm({ ...stateForm, department: e.value })} defaultValue={null} />
                </div>
            </form>
            <ModalForm />
        </div>
    )
}