import { useState } from "react";

function User() {
    // const[data,setdata]=useState("Ansh")
    // function click(){
    //     alert(data)
    //     setdata("Anshuman")
    const [status,setn]=useState(true)
    // }
    return (
        <div style={{ marginLeft: "4%" }}>
            {/* <h1>{data}</h1> */}
            {/* <button onClick={click}>click me</button> */}
            {/* <h1>{props.name}</h1>
      <h2>{props.sirname}</h2>
      <h3>{props.DOB}</h3> */}
    {
            status? <h2>This is for handle toggle in react</h2>:null
    }

            <div>
                <button onClick={()=>{setn(true)}}>Show</button>
                <button onClick={()=>{setn(false)}}>Hide</button>
                <button onClick={()=>{setn(!status)}}>Show/Hide</button>
            </div>

        </div>
    );
}

export default User;