

import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import axios from 'axios'


const SignIn = (props) => {

    const navigator = useNavigate()
   
    

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        const tempUser = {...user}
        tempUser[name] = value
        setUser(tempUser)
    }

    const submitHandler = () => {

        

        axios.post('http://localhost:8080/signIn', user)
        .then((response) => {
            console.log(response.data)
            localStorage.setItem("email", response.data.email)
            props.setUser(response.data)
            navigator('/')
        }).catch((e) => {
            console.log(e)
        })

    }

    return (
        <div className="flex-col full-cont">
                
            <div className="center flex-col">
                <h1>
                    Sign In
                </h1>
                <div className="sign-up-form flex-col">
                    <label>Email</label>
                    <input placeholder="TYPE HERE" type='text' name="email" value={user.email} onChange={changeHandler} />
                    <label>Password</label>
                    <input type='password' name="password" value={user.password} onChange={changeHandler} />
                    <button onClick={submitHandler}>SUBMIT</button>    
                </div>
            </div>
        </div>
    )

}

export default SignIn