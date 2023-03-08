// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import If_condition from './If_condition';
function App() {
  const [name, setName] = useState("Ansh")
  return (
    <div>
      <h1 style={{display:'flex', justifyContent:'center'}}>Main App Component </h1>
      <If_condition/>
    </div >
  );
}

export default App;
