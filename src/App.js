import logo from './logo.svg';
import './App.css';
import { SecondProblem } from './usereffs';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  //const [count , setCount] = useState(0)
  //const [windowSize , setWindowSize] = useState('') 

  
  
  // const [isValue , setIsValue] = useState(true)

  //  const [isDataFinised ,setIsDataFinished] = useState(false)

  // useEffect(()=> {
  //   setCount(count+1)
  // },[isValue])


  //  useState .
  // useRef and useEffet .

  // useEffet  used to perform side effect (functionality that you need to perform along with rendering your components) in functional components .
  //  useEffetcs -/> function (where u write what to perform ) , array / optional .


  //  1.of array is not used -/> inifinilty call
  //  2. empty array -/> one time 
  //  3. array with dependency -/> 


  // function handleCLICK () {
  //   setIsValue(!isValue)
  //   console.log({isValue})
 
  // }



  // useEffect (()=> {
  //   function getWindowSize () {
  //     setWindowSize(`window size is ${window.innerWidth} * ${window.innerHeight}`)
  //   }
  //   window.addEventListener('resize',getWindowSize)

  // },[])






   return (
    <div className="App">
   <SecondProblem/>
    </div>
  );
}

export default App;
