import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { BuildingOffice2Icon, PhoneIcon } from "@heroicons/react/20/solid";
import { Typography } from "@material-tailwind/react";
 
export function FooterWithLogo() {
  return (
    <> 
    <hr className="my-8 border-blue-600 p-10" /> 
    <footer className="w-full bg-black text-white p-8">
   
      <div className="container">
<section className="contact_section layout_padding">
  
  <div className="container container-bg">
    <div className="row">
      <div className="xleft">
      <h2 className="text text-blue-700"> <b>MAP</b></h2>
      <div className="col-lg-7 col-md-6 px-0">
        <div className="map_container">
          <div className="map-responsive">
            <div className="backMap">
              <h2>Map</h2>
            </div>
            {/* <img src="https://www.google.com/maps/place/Masoro,+Kigali/@-1.9549507,30.1434768,15z/data=!4m6!3m5!1s0x19dca764e12dad3b:0x3f0ae3d9f610e5b2!8m2!3d-1.9464851!4d30.1502699!16s%2Fg%2F11bc6sz9sp?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" className="map w-[350px] h-[160px]" /> */}
          </div>
        </div>
      </div>
      </div>
      <div className="xleft">
      <h2 className="text text-blue-700"> <b>SUBSCRIBE</b></h2>
      <div className="col-md-6 col-lg-5 px-0 ">
        <h2 className="text-center p-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit inventore veritatis officiis </h2>
        <form action="">
          <div className="first py-1">
          <label htmlFor="">Email :  </label>
          <input type="email" className=" placeholder placeholder-red-900 px-2 py-1" size={30} name="name" id="name" />
          </div>
          <div className="last py-2">
            <button className="btn bg-green-500 text-white px-5 py-3">Subscribe</button>
          </div>
        </form>
      </div>
      </div>
      <div className="contactus">
<div className="form">
  <h2 className="text text-blue-700"> <b>CONTACT US</b></h2>
  <div>
 <label htmlFor="icons">
 <BuildingOffice2Icon className=" w-4 h-3"/> Kigali KG 478 Ave</label> 
  </div>
  <b>
<PhoneIcon className=" w-4 h-3"/></b>+25078 794 4577
</div>
<div>
 <EnvelopeIcon className="w-4 h-3"/>leonakingeneye2002@gmail.com
</div>
      
    
     </div>
    </div>
  </div>
</section>

      </div>
      <br />
      <br />
      <hr className="my-8 border-blue-gray-50" />
      
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Leon
      </Typography>
    </footer>
    </>
  )
}