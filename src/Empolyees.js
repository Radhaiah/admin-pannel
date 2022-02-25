import React from 'react'
import { Link } from 'react-router-dom'
export default function Empolyees({employee}) {
  
  return (
    <ul className="list-group">
      {employee.map((emp)=>{
        return (
          <Link key={emp.Id} to={`/employees/${emp.Id}`}>
          <li className="list-group-item">{emp.name}{emp.Id} </li></Link>
        )
      })}
    </ul>
  )
}
