import { useEffect, useState } from 'react';

import React from 'react'
import axios from 'axios'




const Workordernew = () => {

    const [workorder, setWorkorder] = useState({})

    const submitHandler = () => {

        axios.post('http://localhost:8080/workorder', workorder)
            .then((response) => {
                console.log(response.data)
                navigator('/workorder')
            }).catch((e) => {
                console.log(e)
            })

    }

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempWon = { ...workorder }
        tempWon[name] = value
        setWorkorder(tempWon)
    }

    return (

        <div className="flex-col full-view container">  
            <div className="center flex-col">
                <h1>
                    Add a new WorkOrder here
                </h1>
                <div className="sign-up-form flex-col">
                    <label>Work Order Number</label>
                    <input placeholder="TYPE HERE" type='text' name="workordernumber" value={workorder.workordernumber} onChange={changeHandler} />
                    <label>Problem</label>
                    <input placeholder="TYPE HERE" type='text' name="nomenclature" value={workorder.problem} onChange={changeHandler} />
                    
                    <button onClick={submitHandler}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default Workordernew