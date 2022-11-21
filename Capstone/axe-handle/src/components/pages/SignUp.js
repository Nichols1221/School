import Header from "./Header"
import "../css/components/sign-up.css"
import { useState } from "react"
import { useNavigate } from "react-router"
import axios from 'axios'


const SignUp = () => {

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

        axios.post('http://localhost:8080/signUp', user)
        .then((response) => {
            console.log(response.data)
            navigator('/sign-in')
        }).catch((e) => {
            console.log(e)
        })

    }



    return (
        <div className="flex-col full-view container">
            <Header user = {{}} setUser = {setUser} />
            <div className="center flex-col">
                <h1>
                    Please sign up to continue
                </h1>
                <div className="sign-up-form flex-col">
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