// import React from 'react'

// export default function List() {
//     const animals=["dogs","cat","lion","tiger"]
//         const result=animals.map((ani,index)=><li>{index} {ani}</li>)
//     return (
//     <div>
//       <ul type="none">
//         {result}
//       </ul>
//     </div>
//   )
// }
// import React from 'react'
// function DisplayName(props)
// {
//     return(
//         <ol>{props.name}</ol>
//     )
// }
// export default function List() {
//     const studentName=["Bharath","Kumar","Ganesan","Dhaya"] 
//     const sName=studentName.map((stu)=><DisplayName name={stu}></DisplayName>)     
//   return (
//     <div>
//         {sName}
//     </div>
//   )
// }
import React from 'react'

export default function List() {
  const College=[{id:1,stuName:"Bharath",age:18},
  {id:2,stuName:"Kumar",age:19},
  {id:3,stuName:"Ganesan",age:20}]
  const PrintDetails=College.map((detail)=><li key={detail.id}>{detail.id}  {detail.stuName}  {detail.age}</li>)
    return (
    <div style={{backgroundColor:"aqua"}}>
      {PrintDetails}
    </div>
  )
}
