import { useState } from "react";
import Button from './Button'
import './form.css';
export default function Registration(){
const[name,setname]=useState()
const[attempt,setattempt]=useState(0)
const[update,setupdate]=useState()
function handlename(event){
    setname(event.target.value)}
function handlesubmit(){
    /*if (!name){
        alert("please fill the form to proceed")
        return*/
    if (name==6){ 
        setattempt(attempt+1)
        setupdate(attempt)
        alert("congratulation you guessed the right number in. " )
        return
    }
    if (name<6){
     alert("you guessed a smaller number .")
     setattempt(attempt + 1)
     return
    }    
   if (name>6){
        alert("you guessed the bigger number .")
        setattempt(attempt+1)
    return }
    /*if(name.trim()==''){
        alert('add proper name')
        return
    }*/
}
return(
    <div className="form">
    <h1> updated value {name}</h1>
    <h1>  you guessed the right number in {update} attempt.</h1>
    <input className="inputfield" placeholder="name" onChange={handlename}/>
    <Button cuttonBtnstyle='submitBtn' clickFunction={handlesubmit}/> 
    </div>
)
}
 