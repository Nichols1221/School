import { useNavigate } from 'react-router'
import { useState } from 'react';
import React from 'react'
import ViewEquipment from './ViewEquipment';


const Equipment = (props)=> {

    const navigator = useNavigate()

    const clickHandler = () => {
        navigator('/Equipmentnew')


    }

    const clickHandlerE = () => {
        navigator('/ViewEquipment')


    }

    const renderButtons = () => {
        console.log(props.user)
        if (props.user.id === undefined) {
            return (

                <div className="center full-cont">
                        Hello! Welcome to Auxilary Equipment. Here you are able to create equipment records and manage those records. Please sign up or sign in to continue.
                </div>
               
               
                
            )
        } else {
            return (

                <div className=" flex-dis flex-col  ">
                    <div className='margin-auto'>
                <button className='general-buttons  ' onClick={clickHandler}>New Equipment</button>
                    </div>
                    
                    
            </div>
               
            )
        }
    }


    return (

        <div className=" flex-dis full-cont ">
            <div className=" flex-dis">
                {renderButtons()}
               
            </div>
            <div className='margin-auto full-cont flex-col'>
                <div>You're equipment
                <ViewEquipment user={props.user} setUser={props.setUser}/>
                    </div>
            </div>

        </div>


    )

}

export default Equipment