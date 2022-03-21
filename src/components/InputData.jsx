import React from "react";

const InputField=({handleClick})=>{

    const [inputName, setInputName]=React.useState("");
    const [inputGender, setInputGender]=React.useState("");
    const [inputDepartment, setInputDepartment]=React.useState("");
    const [inputRole, setInputRole]=React.useState("");
    const [inputSalary, setInputSalary]=React.useState("");

    const HandleName=(e)=>{
        setInputName(e.target.value)
    }
    const HandleGender=(e)=>{
      setInputGender(e.target.value)
    }
    const HandleDepartment=(e)=>{
      setInputDepartment(e.target.value)
    }
    const HandleRole=(e)=>{
      setInputRole(e.target.value)
    }
    const HandleSalary=(e)=>{
      setInputSalary(e.target.value)
    }
    

    return( 
    <>
      <input type="text" placeholder="Name" onChange={HandleName}/><br />
      <input type="text" placeholder="Gender" onChange={HandleGender}/><br />
      <input type="text" placeholder="Department" onChange={HandleDepartment}/><br />
      <input type="text" placeholder="Role" onChange={HandleRole}/><br />
      <input type="text" placeholder="Salary" onChange={HandleSalary}/><br />
      <button onClick={()=>handleClick(inputName, inputGender, inputDepartment, inputRole, inputSalary)}>ADD EMPLOYEE</button><br />
    </>)
}

export { InputField };