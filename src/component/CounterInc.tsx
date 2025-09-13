// CounterInc.tsx 

// import { useState } from "react";
import { useCounterStore } from "../../store/CounterStore"; 

 

const CounterInc = () => { 
    const { count, increase, reset } = useCounterStore();
    // const [c, setC] = useState(0);

    return ( 
        <div > 
            <h2>Counter +</h2> 
            <p>{count}</p> 
           

            <div > 
                <button onClick={reset}  > 
                    Reset 
                </button> 
                <button onClick={increase}> 
                    Increase 
                </button> 
            </div> 
        </div> 
    ); 
} 

export default CounterInc; 