import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Equipment from './components/pages/Equipment'
import Equipmentnew from './components/pages/Equipmentnew'
import Workordernew from './components/pages/Workordernew';
import PageWrapper from './components/reusables/PageWrapper';
import { useState, useEffect } from "react"
import { getUserByEmail } from './makeRequest'
import axios from 'axios';
import ViewEquipment from './components/pages/ViewEquipment';


function App() {

  const [user, setUser] = useState({
    id:null
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const email = localStorage.getItem("email")
    if (email !== null) {
      axios.get(`http://localhost:8080/getUserByEmail/${email}`)
        .then((response) => {
            setUser(response.data)
        })
        .catch((e) => {
          console.log(e)
        })   
    }
  }, [])

  return (
    <PageWrapper user={user} setUser={setUser}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp user={user} setUser={setUser} />} />
        <Route path="/sign-in" element={<SignIn user={user} setUser={setUser} />} />
        <Route path="/Equipment" element={<Equipment user={user} setUser={setUser}/>} />
        {/* <Route path="/ViewEquipment" element={<ViewEquipment user={user} setUser={setUser}/>} /> */}
        <Route path="/Equipmentnew" element={<Equipmentnew user={user} setUser={setUser}/>} />
        <Route path="/Workordernew" element={<Workordernew />} />

      </Routes>
    </PageWrapper>
  );
}

export default App;
