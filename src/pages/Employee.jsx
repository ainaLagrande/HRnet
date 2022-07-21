import React from 'react'
import DataTable from 'react-data-table-component'
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Link } from 'react-router-dom'
import { createContext } from "react";


const FormContext = createContext([]);
  function formatDate(date){
    return date.split('-').reverse().join('-')
  }

  const columns = [
    {
      name: 'First Name',
      selector: row => row.firstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: row => row.lastName,
      sortable: true,
    },
    {
      name: 'Birth date',
      selector: row => row.birthDate,
      format: row => formatDate(row.birthDate),
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: row => row.startDate,
      format: row => formatDate(row.startDate),
      sortable: true,
    },
    {
      name: 'Street',
      selector: row => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: row => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: row => row.state,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: row => row.zipCode,
      sortable: true,
    },
    {
      name: 'Department',
      selector: row => row.department,
      sortable: true,
    },
];

export default function Employee() {

  return (
    <>
    <FormContext.Consumer>
    {
      value => 
      <DataTableExtensions
      columns={columns}
      data={value.allValues}
      export={false}
      print={false}
      filterPlaceholder={"Search"}
    >
      <DataTable
      columns={columns}
      data={value.allValues}
      pagination
      highlightOnHover
  />
  </DataTableExtensions>
    }
</FormContext.Consumer>
<Link to={'/'}>Home</Link>
</>
  )
}
