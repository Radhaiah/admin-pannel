import React from 'react'
import {useParams} from 'react-router-dom'
export default function Employeedetails({getelement}) {
  const {id}=useParams();
  const empdetails=getelement(id);
  return (
    <div>
    {empdetails ? 
    (<div>
      <h3>Employee Details</h3>
      <p>name={empdetails.name}</p>
      <p>Id={empdetails.Id}</p>
      <p>Salary={empdetails.Salary}</p>
    </div> ):
    (<p>Employee Not Found</p>)}
    </div>
  ); 
}
