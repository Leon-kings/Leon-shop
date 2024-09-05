
import './App.css'
// navigation
import Nav from "./Components/Navigation/Nav"
// footer
import { FooterWithLogo } from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'

// forms
import Home from './pages/home/Home'
// BrowserRouter
function App() {


  return (
    <>
    <BrowserRouter>  
    <Nav/>
<Routes>
   <Route element={<Home />} path='/'></Route>
  
    
     
 
      
    
      </Routes>
      <FooterWithLogo />
       </BrowserRouter>
    </>
  )
}

export default App
