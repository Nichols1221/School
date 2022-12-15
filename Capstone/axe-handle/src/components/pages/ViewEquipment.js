import axios from "axios"





const ViewEquipment = (props) => {

    const clickHandler = (event) => {
       axios.delete(`http://localhost:8080/deleteEquipById/${event.target.value}`)
       .then((ress) => {
            axios.get(`http://localhost:8080/getUserByEmail/${props.user.email}`)
            .then((response) => {
                console.log(response)
                props.setUser(response.data)
            })
            .catch((e) => {
            console.log(e)
            })
       })
       .catch((e) => {
        console.log(e)
       })
        
    }

    const renderEquipment = () => {
        console.log(props.user)
        if (props.user.id !== null) {
            return props.user.equipment.map((equipment) => {
                return (
                    <div className="  quarter-width flex-dis "> 
                        <div className=" box-dis margin-buttons">
                            <div>
                                <label >Equipment Number: </label>
                                {equipment.equipmentNumber}
                            </div>
                            <div>
                                <label >Discription: </label>
                                {equipment.nomen}
                            </div>
                            <div>
                                <label >Manufacturer: </label>
                                {equipment.manufacturer}
                            </div>
                            <div>
                                <label >Model: </label>
                                {equipment.model}
                            </div>
                            <button value = {equipment.id} onClick={clickHandler}> Delete</button>
                        </div>
                    </div>
                )
            })
        } else {
            return null
        }
    }

    return (
        <div className="flex-wrap flex-row"> 
            {renderEquipment()}
            
        </div>
    )

}
export default ViewEquipment