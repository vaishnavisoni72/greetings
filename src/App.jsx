import React,{useState} from 'react';

import './App.css';

function App() {
  let [Name,setName]= useState("vaishnavi")
  return (
   <div>
    <h1>hello {Name}</h1>
    <p>made new changes</p>
   </div>
  );
}
    
export default App;
