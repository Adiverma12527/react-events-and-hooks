import {useRef} from "react"
export const SecondProblem = () =>{
let MainIndex = useRef(0)
let img = [ 
    "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-hlLa1mnf2V1p__dFMxkNjf44wHphOxH2g&usqp=CAU",
   " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-hlLa1mnf2V1p__dFMxkNjf44wHphOxH2g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&usqp=CAU",
    "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOq10QoVznrLh7KivWEgkPht-4ez16W-9sKw&usqp=CAU"

]
const myRef = useRef(null);
 function changeImg(){
    if(MainIndex.current<(img.length-1)){
        MainIndex.current = MainIndex.current+1 
        myRef.current.src = img[MainIndex.current];
    }
 }
    return (
        <div >
            <img ref={myRef}
            src = {img[MainIndex.current]}
            alt = "I am an img"        
            />
            <button onClick = {changeImg}>Change Image</button>
        </div>
    )
}