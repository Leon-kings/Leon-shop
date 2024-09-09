// import React from 'react';
import gift from "../../assets/images/gifts.png"
const Gift = () => {
  return (
    <>
    <div>
    <div className="invisible">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
   
      </div>
    <div className="containergift bg-gray-500 my-5 ">

      <div className="content">
      
        <div className="left bg-gray-500">
          <div className="inline">
                  <img src={gift} className="image" alt="gift image" />
                  {/* <img src={gift} className="image" alt="" /> */}
                  </div>
                </div>
                <div className="left h-[205px] bg-gray-500">
                  <h2 className="invisible p-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ut placeat quos, 
                    </h2>
                    <h2 className="text text-blue-700"> <b>GET YOUR GIFTS HERE</b></h2>
                 <h3 className="text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Molestiae quaerat mollitia sit quod nihil, tenetur repudiandae quisquam aut hic. 
                  Ratione cumque assumenda sequi iste! Unde repellat suscipit distinctio eaque nobis?</h3>
                </div>   
        </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    </div>
    </>
  );
}

export default Gift;
