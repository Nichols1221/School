import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Equipmentnew from './components/pages/Equipmentnew'
import Workordernew from './components/pages/Workordernew';
import PageWrapper from './components/reusables/PageWrapper';
import { useState, useEffect } from "react"
import { getUserByEmail } from './makeRequest'


function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const email = localStorage.getItem("email")
    if (email !== null) {
      const user = getUserByEmail(email)
      if (user.id !== undefined) {
        setUser(user)
      } else {
        setIsLoading(false)
      }
    }
  }, [])

  return (
    <PageWrapper user={user} setUser={setUser}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/Equipmentnew" element={<Equipmentnew />} />
        <Route path="/Workordernew" element={<Workordernew />} />

      </Routes>
    </PageWrapper>
  );
}

export default App;
