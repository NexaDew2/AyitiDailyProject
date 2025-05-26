import React, { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const increment=()=> {
    setCount(count=>count+1)}
  const decrement=()=> {
    if(count>0){
      setCount(count=>count-1)
    }
  }
  const reset=()=> {
    setCount(0)
  }

  return(
    <>
    <h1 className='text-blue-400' text-center>{count}</h1>
    <button className='bg-green-300 rounded-full px-2 ml-50 mt-10' onClick={increment}>increment</button>
    <button className='bg-green-300 rounded-full px-2 ml-50 mt-10' onClick={decrement}>decrement</button>
    <button className='bg-green-300 rounded-full px-2 ml-50 mt-10' onClick={reset}>reset</button>
    </>
  )
        
        
    
  
}

export default App;