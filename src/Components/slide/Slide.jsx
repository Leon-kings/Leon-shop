// src/components/Slider.jsx
// import React from 'react';
import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import { Link } from 'react-router-dom';

const Slider = () => {

    const images = [
        'https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY=', 
        'https://media.istockphoto.com/id/155596905/photo/high-class-female-clothing.jpg?s=612x612&w=0&k=20&c=V1HcqglhOc76MHidrmyPjraiMNXwhAzO-wMHbEMMEqM=', 
        'https://t4.ftcdn.net/jpg/00/97/81/69/360_F_97816948_KnKa0XqSjvm36lIQqYSiiTih2oVoi2At.jpg', 
        'https://www.shutterstock.com/image-photo/beach-couple-walking-on-romantic-600nw-188237870.jpg'
    ]

    return (
        <section className='bg-white mt-10 mx-4 sm:mx-8 md:mx-20 lg:mx-36 z-10'>
       
                
                   
            <Swiper
                modules={[Autoplay, A11y]}
                spaceBetween={30} // Adjust the spacing as needed
                slidesPerView={1} // Show only one slide by default
                autoplay
            >
              
               
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
            <div className="left ">
                    <div className="head ">
                        <h2 className="text"> Welcome to Our Leon-Shop</h2>
                        <p className='content px-4 py-7'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            A velit itaque nemo numquam molestiae cumque ullam, quas, dicta nihil quo omnis 
                            corporis, natus reprehenderit nulla assumenda obcaecati enim illum fuga.</p>
                  
                    </div>
                    <br />
                    <div className="contact text-center py-3">
                        <Link to="/contact">
<button className='btn bg-blue-700 text-white px-3 py-3'>Contact us</button></Link>
                    </div>
                </div> 

                      <div className="left">
                        
                            <img
                                src={img}
                                alt={`slide-${index + 1}`}
                                className='w-[700px] h-[400px] mx-auto select-none'
                            />
                        
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </section>
    );
};

export default Slider;