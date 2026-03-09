import React, { useEffect, useRef } from 'react'
import {wsConnection} from './ws';

const App = () => {

  const socket = useRef(null);

  useEffect(()=>{
    socket.current =  wsConnection();
  },[])





  return (
    <>
    
    <h1 className='text-3xl bg-amber-600'>sheraz</h1>
    
    </>
  )
}

export default App
