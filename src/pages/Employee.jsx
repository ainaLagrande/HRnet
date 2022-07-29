// React 
import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { connect } from "react-redux"
// Data 
import { columns } from "../data/data";

function ListEmployees(props) {
    const employees = props.employees
    console.log("LISTS EMPLOYEES :", employees);

    const FilterComponent = ({ filterText, onFilter, onClear }) => (
        <>
            <input id="search" type="text" placeholder="Filter By Name" aria-label="Search Input" value={filterText} onChange={onFilter} />
			<button type="button" onClick={onClear}> X </button>
		</>
	);

    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

	const filteredItems = employees.filter(
		item => item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

    return (
        <div>
            <h1>Current Employees</h1>
            <DataTable 
			columns={columns}
			data={filteredItems}
            
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			selectableRows
			persistTableHead />
            <a href='/'>Home</a>
        </div>
    )

}

export default connect(
    (state) => ({
        employees: state.employees,
    })
    
)(ListEmployees)

