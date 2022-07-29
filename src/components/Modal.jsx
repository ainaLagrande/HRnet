import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from "react-redux"
import  Modal  from "modal-react-hrnet";


function ModalForm () {

  const [stateForm] = useState({})
  const [dateOfBirth] = useState(new Date())
  const [startDate] = useState(new Date())
  const dispatch = useDispatch()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const navigate = useNavigate()

  function saveEmployee () {
    const form = document.querySelector('#employeeCreate')
    const newEmployee = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    startDate: startDate.toLocaleDateString('fr'),
    dateOfBirth: dateOfBirth.toLocaleDateString('fr'),
    street: form.street.value,
    city: form.city.value,
    state: stateForm.stateAddress,
    zipCode: form.zipCode.value,
    department: stateForm.department
    }

    form.firstName.value = ''
    form.lastName.value = ''
    form.street.value = ''
    form.city.value = ''
    form.zipCode.value = ''
    
    dispatch({
      type: 'ADD_EMPLOYEE',
      payload: newEmployee
    })
    console.log(newEmployee)
}

  function openModal () {
    saveEmployee()
    setModalIsOpen(true)
  }

  function closeModal () {
    setModalIsOpen(false)
    navigate('/employee')
  }

  return (
    <>
    <button onClick={openModal} className="submit_button" id='button-save'>Save</button>

    {modalIsOpen && (
      <Modal
        setOpen={setModalIsOpen}
        message="Employee created"
        buttonText="Close" 
      />
    )}
    </>
  )
}

export default ModalForm
