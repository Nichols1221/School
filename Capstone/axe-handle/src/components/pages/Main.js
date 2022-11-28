
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react';
import Header from '../reusables/Header';
import React from 'react'



    



const Main = () =>  {

    const [user, setUser] = useState({})

    const navigator = useNavigate()

    const clickHandler = () => {
        navigator('/Equipment')

    
    }

    const clickHandlerW = () => {
        navigator('/Workorder')

    
    }



  return (
    <div className='flex-dis flex-col'>
        
        <div className='flex-row flex-dis '>
            <button className='half-width center center-text' onClick={clickHandlerW}> Work Orders</button>
            <button className='half-width center center-text' onClick={clickHandler}> Equipment</button>
        </div>
        <div>
        <div className="flex-col full-view container">
           
            
        </div>

        </div>
    </div>
  )
}

export default Main