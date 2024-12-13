import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [user,setUser]=useState('');
  const apiCheck=()=>{
    axios({
      method:'POST',
      url:'http://localhost:8080/api/v1/user/register',
      data:({user})
    }).then((res)=>{
      console.log(res)      
    }).catch((err)=>{
      console.log(err)      
    })
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <input onChange={((e)=>setUser(e.target.value))} type='text' />
      <button onClick={apiCheck}>Click Me!</button>      
    </div>
  );
}

export default App;
