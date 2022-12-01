import { useNavigate } from 'react-router'
import { useState } from 'react';
import React from 'react'


const Equipment = ()=> {

    const navigator = useNavigate()

    const clickHandler = () => {
        navigator('/Equipmentnew')


    }

    const clickHandlerE = () => {
        navigator('/')


    }


    return (

        <div className="flex-col flex-dis ">
            <div className="flex-row flex-dis">
                <div className="flex-col flex-dis third-width">
                        <button onClick={clickHandler}>New Equipment</button>
                        <button onClick={clickHandlerE}>View Equipment</button>
                </div>
                <div className="flex-col six-width">
                    text
                </div>
            </div>


        </div>


    )

}

export default Equipment