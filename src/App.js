// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import If_condition from './If_condition';
import B from './Props/B';
import A from './Props/A';
function App() {
  const [name, setName] = useState("Ansh")
  function user(){
    alert("this is main app")
  }
  return (
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Main App Component</h1>
      <div style={{marginLeft:"3%"}}>
        {/* <B/> */}
        <A/>
      </div>
    </div >
  );
}

export default App;
