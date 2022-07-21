import Modal from 'react-modal'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from "react-redux"

function ModalForm () {

  const [stateForm, setStateForm] = useState({})
  const [dateOfBirth, setDateOfBirth] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const dispatch = useDispatch()
  const [modalIsOpen, setIsOpen] = useState(false)
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
    setIsOpen(true)
  }

  function closeModal () {
    setIsOpen(false)
    navigate('/employee')
  }

  return (
    <>
    <button onClick={openModal} className="submit_button" id='button-save'>Save</button>
    <Modal
      className='modal'
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      appElement={document.getElementById('root') || undefined}
    >
      <div  className="overlay"></div>
      <div className="modal-content">
        <h3> Employee Created ! </h3>
        <button onClick={closeModal} className="close-modal">x</button>
      </div>
    </Modal>
    </>
  )
}

export default ModalForm
