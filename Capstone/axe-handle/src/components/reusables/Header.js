
import { useNavigate } from "react-router"

import "../../css/pages/header.css"


const Header = (props) => { 
    
    const navigator = useNavigate()


    const clickHandler = () => {
        localStorage.removeItem('email')
        navigator('/')
        props.setUser({})
    }

    const renderSignInOutButtons = () => {
       console.log(props.user)
        if (props.user.id === undefined) {
            return (
                <div className=' flex-dis center'>
                    
                    <a className = " right half-width center text-decor" href='/sign-up'>Sign Up</a>
                    <a className = " right half-width text-decor" href='/sign-in'>Sign In</a> 
                    
                </div>
                
            )
        } else {
            return (
                <div className="center">
                    <button className='right' onClick={clickHandler}>Sign Out</button>
                </div>
            )
        }
    }



return (
    <div className="flex-row flex-dis head-colors ">
        <div className="flex-row third-width  center flex-dis margin-auto">
            <a href="/" className='center third-width text-decor'>File</a>
            <a href="/" className='center third-width text-decor'>Edit</a>
            <a href="/" className='center  third-width text-decor'>Help</a>
        </div>
        <div className="flex-row third-width center">
            <div className = "center center-text">
                <a className = "center  logo text-decor" href='/'> AxE</a>
            </div>

        </div>
        <div className="flex-row third-width  center right    flex-dis">
            <div className='full-width center'>
                {renderSignInOutButtons()}
            </div>
            
            <div className="full-width text-decor">
                Welcome {props.user.firstName}
            </div>

        </div>
    </div>

)
}
export default Header