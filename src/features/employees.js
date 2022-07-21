const initState = JSON.parse(localStorage.getItem('employees')) || [
    {
        firstName: "Aina",
        lastName: "Lagrande",
        dateOfBirth: '20/04/1999',
        startDate: "01/07/2022",
        department: "Developpement",
        street: "POSTUMINUS",
        city: "Rennes",
        state: "Bzh",
        zipCode: "35000",
    }
]

const ADD_EMPLOYEE = "ADD_EMPLOYEE"

function EmployeeReducer (state = initState, action) {
    switch (action.type) {
        case ADD_EMPLOYEE:
            console.log(action.payload);
            state = [...state, { ...action.payload }]
            localStorage.setItem('employees', JSON.stringify(state))
            return state
    
        default:
            return state;
    }
}

export default EmployeeReducer