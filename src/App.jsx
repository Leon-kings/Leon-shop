import './App.css'
// navigation
import Nav from "./Components/Navigation/Nav"
// footer
import { FooterWithLogo } from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
// forms
import Home from './pages/home/Home'
import Setting from './pages/settings/Setting'
import WhyUs from './HomeComponent/WhyUs/WhyUs'
import Login from './pages/registration/login/Login'
import Register from "./pages/registration/registration/Register"
import ThreeColOurTeams from './pages/team/OurTeam'
import ThreeAbout from './pages/about/About'
import ThreeServices from './pages/services/Services'
import ThreeContact from './pages/contact/Contact'
import ViewAll from './pages/product/ViewAll'
// import Shop from './pages/shop/Shop'
// BrowserRouter
function App() {
  return (
    <>
  
    <BrowserRouter>  
    <Nav/>
<Routes>
   <Route element={<Home />} path='/'></Route>
   <Route element={<Setting />} path='/settings'></Route>
   <Route element={<WhyUs />} path='/why-us'></Route>
    {/* form action */}
    <Route element={<Login />} path='/Login'></Route>
    <Route element={<Register />} path='/Registration'></Route>
    {/*  */}
    <Route element={<ThreeColOurTeams />} path='/Team'></Route>
    <Route element={<ThreeAbout />} path='/About-Leon-shop'></Route>
    <Route element={<ThreeServices />} path='/Services-Leon-shop'></Route>
    <Route element={<ThreeContact />} path='/Contact-Leon-shop'></Route>
    {/*  */}
    {/* <Route element={<Shop />} path='/shop'></Route> */}
    <Route element={<ViewAll />} path='/viewall'></Route>
</Routes>
      <FooterWithLogo />
       </BrowserRouter>
      
    </>
  )
}

export default App
