import './App.css'
import Product from './pages/Product'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import { Route, Routes, Link } from 'react-router-dom'
import ProductsDeatils from './pages/ProductDetails'
import FocusInput from './pages/FocusInput'


function App() {

  return(

  <>
    <Link to="/">Home</Link>
    <Link to="/product">Product</Link>
    <Link to="/profile">Profile</Link>    
    <Link to="/About">About</Link>
    <Link to="/practice">Go to Practice </Link>
    
    
    
    
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path='/product' element={< Product />} />
      <Route path='/profile' element={< Profile />} />
      <Route path="/About" element={ < About />} />
      <Route path='/items/:id' element={< ProductsDeatils />} />
      <Route path='/practice' element={< FocusInput />} />
    </Routes>
  </>
  )


}

export default App
