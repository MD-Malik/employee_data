// import logo from './logo.svg';
import React from "react";
// import './App.css';
import { InputField } from "./components/InputData.jsx"
import { Display_data } from "./components/DisplayData.jsx"

function App() {

  const [employeeDetails, setEmployeeDetails]=React.useState([])

  React.useEffect(()=>{
    getData();
  },[])

  const getData=()=>{
    fetch("http://localhost:3000/employee")
    .then(res=>res.json())
    .then(json=>setEmployeeDetails(json))
    .catch(err=>console.log(err))
  }

  const handleClick=(inputName, inputGender, inputDepartment, inputRole, inputSalary)=>{
    const employeeDetails = {
      inputName,
      inputGender,
      inputDepartment,
      inputSalary,
      inputRole
    }
    // console.log(employeeDetails);
    fetch("http://localhost:3000/employee", {
      method: "POST",
      body: JSON.stringify(employeeDetails),
      headers:{
        "content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json())
    // .then(json => console.log(json));

    getData();
  }


  return (
    <div>
      <InputField handleClick={handleClick}/>
      <Display_data display_data={employeeDetails}/>
    </div>
  );
}

export default App;
