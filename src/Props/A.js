// this is parent app and we are passing data through props to child component 
import B from "./B"
import { useState,React } from "react"
export default function A() {
    function user() {
        alert("hi this is parent app")
    }
    return (
        <div>
            <h1>this is A component</h1>
            <B data={user}/>
        </div>
    )
}