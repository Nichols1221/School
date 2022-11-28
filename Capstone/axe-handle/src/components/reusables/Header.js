
import { useNavigate } from 'react-router'
import '../../css/reusables/flex.css'

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
                <div className=''>
                <div>
                    <a className = " " href='/sign-up'>Sign Up</a>
                    <a className = " " href='/sign-in'>Sign In</a> 
                </div>
                
            </div>
            )
        } else {
            return (
                <div className="">
                    <button className='' onClick={clickHandler}>Sign Out</button>
                </div>
            )
        }
    }



return (
    <div className="flex-col flex-dis">
        <div className="flex-row flex-dis">
            <a href="/" className=''>File</a>
            <a href="/" className=''>Edit</a>
            <a href="/" className=''>Help</a>
        </div>
        <div className="flex-row ">
            <div className = "">
                <a className = "" href='/'> AxE</a>
            </div>

        </div>
        <div className="flex-row ">
            <div>
                {renderSignInOutButtons()}
            </div>
            
            <div className="">
                {props.user.firstName}
            </div>

        </div>
    </div>

)
}
export default Header