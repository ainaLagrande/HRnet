import Select from "react-select";
import { department, state } from "../data/data";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from "react";
import ModalForm from "./Modal";

export default function Form() {
    const [stateForm, setStateForm] = useState({})
    const [dateOfBirth, setDateOfBirth] = useState(new Date())
    const [startDate, setStartDate] = useState(new Date())
    
    return (
        <div className='form'>
            <form id="employeeCreate" >
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type='text' id="firstName"/>
                    <div className="result" id="first-validation"></div>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type='text' id="lastName" />
                    <div className="result" id="last-validation"></div>
                </div>
                <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <DatePicker id="dateOfBirth" selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)} />
                    <div className="result" id="date-validation"></div>
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <DatePicker id="startDate" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <div className="result" id="start-date-validation"></div>
                </div>
                <fieldset>
                    <legend>Address</legend>
                    <div className="form-group">
                        <label htmlFor="street">Street</label>
                        <input type='text' id="street" />
                        <div className="result" id="street-validation"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type='text' id="city" />
                        <div className="result" id="city-validation"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <Select id="state" options={state} onChange={(e) => setStateForm({ ...stateForm, stateAddress: e.value })} defaultValue={null} />
                        <div className="result" id="state-validation"></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type='number' id="zipCode" />
                        <div className="result" id="zip-code-validation"></div>
                    </div>
                </fieldset>
                <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <Select id="department" options={department} onChange={(e) => setStateForm({ ...stateForm, department: e.value })} defaultValue={null} />
                    <div className="result" id="departement-validation"></div>
                </div>
            </form>
            <ModalForm />
        </div>
    )
}