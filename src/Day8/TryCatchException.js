import React from 'react'

export default function TryCatchException({fruit}) {

    try
    {   
        if(fruit === "Onion")
            throw new Error("Not a fruit")

    }
    catch(error)
    {
        console.log("Not a fruitss")
        document.write(error);
    }
  return (
    <div>
      I am {fruit}
    </div>
  )
}
