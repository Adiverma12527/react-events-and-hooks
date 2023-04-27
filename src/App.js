import './App.css';
import { useState} from 'react'
function App() {
  const [count,setcount]= useState(0);
  function handleclick(){
   const newcount=count+1;
   setcount(newcount)
  }
  function handleclicks(){
    if(count>0){
    const newcount=count-1;
    setcount(newcount)}
  }
return(<div className='App'>
  <h1> increase value{count}</h1>
  <button onClick={handleclick}> increase the value of count</button>
  <button onClick={handleclicks}> decrease the value of count </button></div>
)
}

export default App;
