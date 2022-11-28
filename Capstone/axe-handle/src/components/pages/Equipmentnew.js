
import { useEffect, useState } from 'react';
import Header from '../reusables/Header';
import React from 'react'
import axios from 'axios'




const Equipmentnew = () => {

    const [equipment, setEquipment] = useState({})

    const submitHandler = () => {

        axios.post('http://localhost:8080/equipment', equipment)
            .then((response) => {
                console.log(response.data)
                navigator('/equipment')
            }).catch((e) => {
                console.log(e)
            })

    }

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempEquip = { ...equipment }
        tempEquip[name] = value
        setEquipment(tempEquip)
    }

    return (

        <div className="flex-col full-view container">  
            <div className="center flex-col">
                <h1>
                    Add new equipment here
                </h1>
                <div className="sign-up-form flex-col">
                    <label>Equipment Number</label>
                    <input placeholder="TYPE HERE" type='text' name="equipmentnumber" value={equipment.equipmentNumber} onChange={changeHandler} />
                    <label>Nomenclature</label>
                    <input placeholder="TYPE HERE" type='text' name="nomenclature" value={equipment.nomenclature} onChange={changeHandler} />
                    <label>manufacturer</label>
                    <input placeholder="TYPE HERE" type='text' name="manufacturer" value={equipment.manufacturer} onChange={changeHandler} />
                    <label>Model</label>
                    <input placeholder="TYPE HERE" type='text' name="model" value={equipment.model} onChange={changeHandler} />
                    <button onClick={submitHandler}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default Equipmentnew