import { useState } from "react"
export default function Toggle(){
    const [data,setdata]=useState()
    return(
        <div style={{marginLeft:"4%"}}>
            <button>Show</button>
            <button>Hide</button>
        </div>
    )
}