import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Equipmentnew from './components/pages/Equipmentnew'
import Workordernew from './components/pages/Workordernew';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/Equipmentnew" element={<Equipmentnew />} />
      <Route path="/Workordernew" element={<Workordernew />} />

    </Routes>
    
  );
}

export default App;
