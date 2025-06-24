import Signin from './pages/signin.jsx'
import Signup from './pages/signup.jsx'
import MainPage from './pages/Home.jsx'
import ThotPage from './pages/thotpage.jsx'
import EditThot from './pages/EditThot.jsx'
import Profile from './pages/Profile.jsx'
import Addthot from './pages/addthot.jsx'
import DeleteThot from './pages/deleteThot.jsx'
import './CSS/App.css'
import { Route,Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <div>
      <main className='main-content'>
        <Routes>
        <Route path='/EditThot' element={<EditThot />}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/Home' element={<MainPage />}></Route>
        <Route path="/thot/:id" element={<ThotPage />}></Route>
        <Route path="/addthot" element={<Addthot />}></Route>
        <Route path="/DeleteThot" element={<DeleteThot/>}></Route>

    </Routes> 
      </main>

    </div>
    
     
    </>
  )
}

export default App
