
import './App.css'
// navigation
import Nav from "./Components/Navigation/Nav"
// footer
import { FooterWithLogo } from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
// import {CartProvider} from "./Components/Cart/context/cart"
// forms
import Home from './pages/home/Home'
import Setting from './pages/settings/Setting'
import WhyUs from './HomeComponent/WhyUs/WhyUs'
import Login from './pages/registration/login/Login'
import Register from "./pages/registration/registration/Register"
// BrowserRouter
function App() {


  return (
    <>
    {/* <CartProvider> */}
    <BrowserRouter>  
    <Nav/>
<Routes>
   <Route element={<Home />} path='/'></Route>
   <Route element={<Setting />} path='/settings'></Route>
   <Route element={<WhyUs />} path='/why-us'></Route>
    {/* form action */}
    <Route element={<Login />} path='/Login'></Route>
    <Route element={<Register />} path='/Registration'></Route>
 
      
    
</Routes>
      <FooterWithLogo />
       </BrowserRouter>
       {/* </CartProvider> */}
    </>
  )
}

export default App
