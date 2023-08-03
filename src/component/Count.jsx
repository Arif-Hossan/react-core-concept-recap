import React from 'react';
import { useState } from 'react';
const Count = () => {
    const [count,setCount]=useState(1);
    const increasePower = () =>{
        setCount(count+1);
    }
    const decreasePower = () =>{
    //   if(count>0){
    //     setCount(count-1);
    //   }
     const newCount = count> 0 ? count-1:count;
     setCount(newCount)
    }
    return (
        <div>
            <h1>Count : {count} </h1>
            <button onClick={increasePower}>Boost Power</button><br />
            <button onClick={decreasePower}>Slowdown Power</button>
        </div>
    );
};

export default Count;