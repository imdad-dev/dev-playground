import { useState } from "react"

 

export function Counter(){
    const [count , setCount] =useState<number>(0)
    return (
        <div>
            <p>Cup's Ordered : {count} </p>

            <button
             onClick={()=>setCount(count => ++count)}
            > 
            Ordered one more
            </button>
        </div>
    )
}