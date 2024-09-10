// import React from 'react'
import Slider from "../../Components/slide/Slide"
import Example from "../../Components/product/Products"
import Product from "../../Components/Prodct/Product"
import WhyUs from "../../HomeComponent/WhyUs/WhyUs"
import Gift from "../../HomeComponent/gifted/Gift"
import Arrival from "../../HomeComponent/arrival/Arrival"
import Testimony from "../../HomeComponent/testmony/Testimony"
import Register from "../../pages/registration/registration/Register"
import App from "../../Components/Cart/App"
function Home() {
  return (
  <>
    <div className="container px-2 py-2">
        <div className="view px-1 py-1">
            <div className="head px-0 py-0">
            <Slider/>
            </div>
        </div>
        <hr className="bg-blue-400 text-blue-800"/>
        <br />
        <div className="container px-2 py-2">
          <div className="products">
            <Product/>
          </div>
        </div>
        <div className="view px-1 py-1">
            <div className="head px-0 py-0">
                <h2 className="text-center hover:text-red-500">
                </h2>
               <Example/> 
         
            </div>
        </div>

        <div className="view px-1 py-1">
            <div className="head px-0 py-0">
                <h2 className="text-center hover:text-red-500">
                </h2>
                <WhyUs/> 
           
            </div>
        </div>
        <br />
        <div className="view px-1 py-4">
            <div className="head px-0 py-0">
                <h2 className="text-center hover:text-red-500">
                </h2>
                 <Gift/>
          
            </div>
        </div>

        <div className="view px-1 py-1">
            <div className="head px-0 py-0">
                <h2 className="text-center hover:text-red-500">
                </h2>
                <Arrival/>
          
            </div>
        </div>

   

        <div className="view px-1 py-1">
            <div className="head px-0 py-0">
                <h2 className="text-center hover:text-red-500">
                </h2>
                <Testimony/>
          
            </div>
        </div>


        <div className="view px-1 py-1">
            <div className="head px-0 py-0">
                <h2 className="text-center hover:text-red-500">
                </h2>
                <Register/>
          
            </div>
        </div>

        <div className="view px-1 py-1">
            <div className="head px-0 py-0">
                <h2 className="text-center hover:text-red-500">
                </h2>
                <App/>
          
            </div>
        </div>


    </div>
    <br />
    <br />
    </>
  )
}

export default Home