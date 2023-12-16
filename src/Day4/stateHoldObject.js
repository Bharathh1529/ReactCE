import React, { useState } from 'react'

export default function StateHoldObject() {
    const[college,setCollege]=useState({cid:1, cName:"Skct",year:2023})

    const changeDemo=()=>{
        setCollege((PrevState)=>{
            return{...PrevState,year:2024}
        })
    }
    return (
      <div>
            <h1>College Id is {college.cid} College Name is {college.cName} year {college.year}</h1> 
            <button onClick={changeDemo}>changeYear</button>       
      </div>
    )
}