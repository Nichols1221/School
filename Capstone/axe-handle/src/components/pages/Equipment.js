import { useNavigate } from 'react-router'
import { useState } from 'react';
import React from 'react'


const Equipment = (props)=> {

    const navigator = useNavigate()

    const clickHandler = () => {
        navigator('/Equipmentnew')


    }

    const clickHandlerE = () => {
        navigator('/VeiwEquipment')


    }

    const renderButtons = () => {
        console.log(props.user)
        if (props.user.id === undefined) {
            return (

                <div className="center">
                        Hello! Welcome to Auxilary Equipment. Here you are able to create equipment records and manage those records. Please sign up or sign in to continue.
                </div>
               
               
                
            )
        } else {
            return (

                <div className="flex-row flex-dis third-width">
                <button className='general-buttons ' onClick={clickHandler}>New Equipment</button>
                <button className='general-buttons ' onClick={clickHandlerE}>View Equipment</button>
            </div>
               
            )
        }
    }


    return (

        <div className="flex-col flex-dis ">
            <div className="flex-row flex-dis">
                {renderButtons()}
               
                <div className="flex-col six-width">
                    
                </div>
            </div>


        </div>


    )

}

export default Equipment