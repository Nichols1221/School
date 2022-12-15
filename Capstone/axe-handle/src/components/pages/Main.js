
import { useNavigate } from 'react-router'
import { useState } from 'react';
import React from 'react'







const Main = () => {

    const [user, setUser] = useState({})

    const navigator = useNavigate()

    const clickHandler = () => {
        navigator('/Equipment')


    }

    const clickHandlerW = () => {
        navigator('/Workorder')


    }



    return (
        <div className='flex-dis flex-col '>
            <div className='flex-row margin-auto between-height'>

            </div>

            <div className='flex-row flex-dis center  '>
                
                <div className='fifth-width'>
                <button className='half-width center center-text general-buttons ' onClick={clickHandler}> Equipment</button>
                </div>
            </div>
            <div>
                <div className="flex-col full-view container">
                    

                </div>

            </div>
        </div>
    )
}

export default Main