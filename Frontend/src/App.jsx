import Signin from './pages/signin.jsx'
import './CSS/App.css'
import { Route,Routes } from 'react-router-dom'
import Signup from './pages/signup.jsx'
function App() {
  return (
    <>
    <div>
     
      <main>
        <Routes>
        <Route path='/' element={<Signin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
    </Routes> 
      </main>

    </div>
    
     
    </>
  )
}

export default App
