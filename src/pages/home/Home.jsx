// import React from 'react'
import Slider from "../../Components/slide/Slide"
import Example from "../../Components/product/Products"
import Product from "../../Components/Prodct/Product"
function Home() {
  return (
    <div className="container px-2 py-2">
        <div className="view px-1 py-1">
            <div className="head px-0 py-0">
                <h2 className="text-center hover:text-red-500">Leon-Shop
                </h2>
                
            <Slider/>
            </div>
        </div>
        <hr className="bg-blue-400 text-blue-800"/>
        <br />
        <div className="container px-2 py-2">
          <div className="products">
            <Product/>
          </div>
          <Example/>
        </div>

    </div>
  )
}

export default Home