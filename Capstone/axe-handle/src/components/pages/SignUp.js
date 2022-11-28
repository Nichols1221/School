import Header from "../reusables/Header"

import { useState } from "react"
import { useNavigate } from "react-router"
import axios from 'axios'


const SignUp = () => {

    const navigator = useNavigate()
    const [message, setMessage] = useState("")
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
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

    const validation = () => {
        const isAnythingThere = user.email !== '' && user.password !== '' ? true : false
        const isValidEmail = user.email.includes('@') && user.email.includes('.com') ? true : false
        const upper = /[A-Z]/.test(user.password);
        const lower = /[a-z]/.test(user.password);
        const isValidPassword = user.password.length > 6 && (upper && lower) ? true : false
        
        return isAnythingThere && isValidEmail && isValidPassword
    }


    const submitHandler = () => {

        if (validation()) {

            axios.post('http://localhost:8080/signUp', user)
                .then((response) => {
                    navigator('/sign-in')
                }).catch((e) => {
                    console.log(e)
                    setMessage(e.response.data)
                })
        } else {
            setMessage("INVALID INPUTS, YOURE WRONG MATE")
        }

    }

    const toggleErrorMessage = () => {
        if(message !== "") {
            return (
                <div>
                    {message}
                </div>
            )
        } 
        return null
    }

   



    return (
        <div className="flex-col full-view container">
            <Header user = {{}} setUser = {setUser} />
            <div className="center flex-col">
                <h1>
                    Please sign up to continue
                </h1>
                <div className="sign-up-form flex-col">
                    <label>First Name</label>
                    <input placeholder="TYPE HERE" type='text' name="firstName" value={user.firstName} onChange={changeHandler} />
                    <label>Last Name</label>
                    <input placeholder="TYPE HERE" type='text' name="lastName" value={user.lastName} onChange={changeHandler} />
                    <label>Username</label>
                    <input placeholder="TYPE HERE" type='text' name="email" value={user.email} onChange={changeHandler} />
                    <label>Password</label>
                    <input type='password' name="password" value={user.password} onChange={changeHandler} />
                    <button onClick={submitHandler}>SUBMIT</button>    
                </div>
            </div>
        </div>
    )

}

export default SignUp