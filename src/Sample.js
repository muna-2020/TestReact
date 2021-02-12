
import React,{useState} from 'react';

const Smaple = () =>{
    let [x,setX] = useState("");

    const onChange = (event) =>{
        setX(event.target.value);
    }
    return <div>
        <input type="text" value={x} onChange={(e)=>{onChange(e)}}/>
        <span>hello..........</span>
    </div>
}

export default Smaple;