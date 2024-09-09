
import './App.css'
// navigation
import Nav from "./Components/Navigation/Nav"
// footer
import { FooterWithLogo } from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import CartProvider from "./Components/Cart/components/Products"
// forms
import Home from './pages/home/Home'
import Setting from './pages/settings/Setting'
import WhyUs from './HomeComponent/WhyUs/WhyUs'
// BrowserRouter
function App() {


  return (
    <>
    <CartProvider>
    <BrowserRouter>  
    <Nav/>
<Routes>
   <Route element={<Home />} path='/'></Route>
   <Route element={<Setting />} path='/settings'></Route>
   <Route element={<WhyUs />} path='/why-us'></Route>
    
  
 
      
    
      </Routes>
      <FooterWithLogo />
       </BrowserRouter>
       </CartProvider>
    </>
  )
}

export default App
