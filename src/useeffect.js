import { useRef } from "react"

export const FilePicker = () => {
 
const myRef = useRef(null)


 function PickYourFile(){

  myRef.current.click()

  }


  return(
      <div >
        <h1>Designed a file picker</h1>
        <label>Upload your document</label>
        <input type="file" ref={myRef} />
        <button onClick={PickYourFile}>Click</button>
      </div>
  )
}