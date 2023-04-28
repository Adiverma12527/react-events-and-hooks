export default function Button({  cuttonBtnstyle,clickFunction}){
    return(
        <button className={cuttonBtnstyle}
        onClick={clickFunction}>SUBMIT</button>
    )
}