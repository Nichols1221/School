
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router"


import React from 'react'
import axios from 'axios'




const Equipmentnew = (props) => {

    const navigator = useNavigate()


    const [equipment, setEquipment] = useState({
       
            equipmentNumber: '',
            nomen: '',
            manufacturer: '',
            model: ''
    })

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempEquip = { ...equipment }
        tempEquip[name] = value
        setEquipment(tempEquip)
    }
        

    const submitHandler = () => {

        axios.post(`http://localhost:8080/addEquip/${props.user.id}`, equipment)
            .then((response) => {
                props.setUser(response.data)
                console.log(response.data)
                navigator('/equipment')
            }).catch((e) => {
                console.log(e)
            })

    }

    

    return (

        <div className="flex-col full-view container full-cont">  
            <div className="center flex-col">
                <h1>
                    Add new equipment here
                </h1>
                <div className="sign-up-form flex-dis flex-col center">
                    <div>
                    <label>Equipment Number</label>
                    <input placeholder="TYPE HERE" type='text' name="equipmentNumber" value={equipment.equipmentNumber} onChange={changeHandler} />
                    </div>
                    <div>
                    <label>Nomenclature</label>
                    <input placeholder="TYPE HERE" type='text' name="nomen" value={equipment.nomen} onChange={changeHandler} />
                    </div>
                    <div>
                    <label>Manufacturer</label>
                    <input placeholder="TYPE HERE" type='text' name="manufacturer" value={equipment.manufacturer} onChange={changeHandler} />
                    </div>
                    <div>
                    <label>Model</label>
                    <input placeholder="TYPE HERE" type='text' name="model" value={equipment.model} onChange={changeHandler} />
                    </div>
                    <div>
                    <button onClick={submitHandler}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipmentnew