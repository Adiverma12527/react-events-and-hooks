import './App.css'
import{useState} from 'react';

function App(){
  const[start,end]=useState("");
  const[headingText,setHeading]=useState(" ");
  function handlechange(event){
    end(event.target.value)
  }
  function handleClick(){
    setHeading(start);
  }
  return(
    <div className='App'> <h1 className='heading'>Hi, my name is {headingText}</h1>
    <input className='inputTag' placeholder='add your name....' onChange={handlechange} value={start}/>
    <button onClick={handleClick}>submit</button>
    </div>
  );

}
export default App;