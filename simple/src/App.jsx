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
    <h1 className='text-blue-400'>Dhanunjay</h1>
    <button className='bg-green-300 rounded-full px-5 ml-100 mt-100'>Increment</button>
    </>
  )
        
        
    
  
}

export default App
