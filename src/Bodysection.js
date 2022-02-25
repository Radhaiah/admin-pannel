import React from 'react'
import {Routes,Route} from 'react-router-dom'
import DashBoardComponents from './DashBoardComponents'
import Empolyees from './Empolyees'
import Employeedetails from './Employeedetails'
import About from './About'
export default function Bodysection() {
    const employeelist=[
        {
          name:"Radhaiah",
          Id:1,
          Salary:100000
        },
        {
          name:"Venkatesh",
          Id:2,
          Salary:100000
        },
        {
          name:"Revathi",
          Id:3,
          Salary:100000
        }
      ];
      const getItemById =(id)=>{
          return employeelist.find((emp)=>emp.Id==id);
      };
  return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
            <div className="container-fluid">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <Routes>
                        <Route index path="/dashboard" element={<DashBoardComponents />}></Route>
                        <Route index element={<DashBoardComponents />}></Route>
                        <Route path="/employees" element={<Empolyees employee={employeelist}/>}></Route>
                        <Route path="/employees/:id" element={<Employeedetails getelement={getItemById} />}></Route>
                        <Route path="/about" element={<About />}></Route>
                    </Routes>    
                </div> 
            </div>
        </div>
    </div>
  )
}

