import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../reusables/Header';
import Main from './Main'



function Home() {

  
    const [user, setUser] = useState({})
    

    useEffect(() => {
        if(localStorage.getItem("email")) {
            axios.get(`http://localhost:8080/getUserByEmail/${localStorage.getItem("email")}`)
            .then((response) => {
                console.log(response.data)
                setUser(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
        }
    }, [])
 
  return (
    <div className='flex-col full-cont'>
      <Header user = {user} setUser = {setUser} />
      <Main/>
      
    </div>
  );
}

export default Home;