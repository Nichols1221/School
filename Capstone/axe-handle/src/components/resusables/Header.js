
import { useNavigate } from 'react-router'

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
                <div className='letter-button'>
                <div>
                    <a className = "center " href='/sign-up'>Sign Up</a>
                    <a className = "center " href='/sign-in'>Sign In</a> 
                </div>
                
            </div>
            )
        } else {
            return (
                <div className="">
                    <button className='center' onClick={clickHandler}>Sign Out</button>
                </div>
            )
        }
    }



return (
    <div className="flex-row full-width bg-color header-padding center">
        <div className="third-width">
            <a href="/" className='firstAnchor center'>File</a>
            <a href="/" className='firstAnchor center'>Edit</a>
            <a href="/" className='firstAnchor center'>Help</a>
        </div>
        <div className="third-width center ">
            <div className = "center">
                <a className = "center logo" href='/'> AxE</a>
            </div>

        </div>
        <div className="third-width right ">
            <div>
                {renderSignInOutButtons()}
            </div>
            
            <div className="third-width center ">
                {props.user.firstName}
            </div>

        </div>
    </div>

)
}
export default Header