import Signin from './pages/signin.jsx'
import Signup from './pages/signup.jsx'
import MainPage from './pages/Home.jsx'
import ThotPage from './pages/thotpage.jsx'
import Addthot from './components/addthot.jsx'
import './CSS/App.css'
import { Route,Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <div>
      <main className='main-content'>
        <Routes>
        <Route path='/' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/Home' element={<MainPage />}></Route>
        <Route path="/thot/:id" element={<ThotPage />}></Route>
        <Route path="/addthot" element={<Addthot />}></Route>

    </Routes> 
      </main>

    </div>
    
     
    </>
  )
}

export default App
