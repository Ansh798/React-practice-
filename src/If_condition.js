// this component is for understanding if condition in react like if we want to show content on conditions



import { useState } from "react"

export default function If_condition() {
    const [logged, setlogged] = useState(2)
    
    /* 1.method second */
    return (
        // 1.1this is for checking only two conditions at a time
        // <div>
        //     <div>
        //         {logged ? <h1>Hi Ansh</h1> : <h2>Hi Guest</h2>}
        //     </div>
        // </div>
        
        // 1.2 this is for checking multiple conditions at a time.
        //  Suppose we have three conditions we have three conditions 1,2,3
        <div>
            {logged==1 ? <h1>User 1</h1>:logged==2 ?<h2>User 2</h2>:<h1>Guest</h1>}
        </div>

    )

    // 2.second method but this method is not recommended
    // if(logged){
    //     return(
    //         <div>
    //             <h1>Hi Ansh</h1>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>Hi Guest</h1>
    //         </div>
    //     )
    // }
}
