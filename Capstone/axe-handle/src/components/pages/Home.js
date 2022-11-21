import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Header';



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
    <div className='flex-col full-view container'>
      <Header user = {user} setUser = {setUser} />
      
      
    </div>
  );
}

export default Home;