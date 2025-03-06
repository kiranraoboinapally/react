import {useState} from "react";
export default function UseState()
{
    let [counter,updateCounter]=useState(0);
return(
<>
<h3>Counter Value is:{counter}</h3>
<button onClick={
    ()=>{
        updateCounter(counter+1)
    }
}
>Click Here to Update</button>
</>
);
}