import React from "react";
import "./DisplayData.css"

const Display_data=({display_data})=>{
    // console.log(display_data)
    return(
        <>
        {display_data.map((element)=>(
           <div key={element.id} className="box_div">
           <h4>Name: {element.inputName}</h4>
           <h4 >Gender: {element.inputGender}</h4>
           <h4>Role: {element.inputRole}</h4>
           <h4>Department: {element.inputDepartment}</h4>
           <h4>Salary: {element.inputSalary}</h4>
           </div> 
        ))}
        </>
    )
}
export { Display_data }