import Signin from './pages/signin.jsx'
import Signup from './pages/signup.jsx'
import MainPage from './pages/Home.jsx'
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
    </Routes> 
      </main>

    </div>
    
     
    </>
  )
}

export default App
