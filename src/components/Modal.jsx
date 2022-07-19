import Modal from 'react-modal'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { data as emp } from '../data/data'


function ModalForm () {
  const [modalIsOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  function saveEmployee () {
    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const dateOfBirth = document.getElementById('dateOfBirth')
    const startDate = document.getElementById('startDate')
    const department = document.getElementById('department')
    const street = document.getElementById('street')
    const city = document.getElementById('city')
    const state = document.getElementById('state')
    const zipCode = document.getElementById('zipCode')

    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      department: department.value,
      street: street.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value
    }
    emp.push(employee)
    employees.push(employee)
    localStorage.setItem('employee', JSON.stringify(employees))
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
