// this is for understanding to pass function as a prop from parent to child 

export default function B(props){
    return (
        <div>
            <h1>this is B component</h1>
            <button  onClick={props.data}>click me</button>
        </div>
    )
}