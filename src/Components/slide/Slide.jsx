// src/components/Slider.jsx
// import React from 'react';
import { Autoplay, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';

const Slider = () => {

    const images = ['https://images.pexels.com/photos/16770561/pexels-photo-16770561/free-photo-of-scenic-view-of-green-hills-and-mountains.jpeg', 'https://images.pexels.com/photos/20041507/pexels-photo-20041507/free-photo-of-close-up-of-sleeping-cat.jpeg', 'https://images.pexels.com/photos/12187128/pexels-photo-12187128.jpeg', 'https://images.pexels.com/photos/11785594/pexels-photo-11785594.jpeg']

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
<button className='btn bg-blue-700 text-white px-3 py-3'>Contact us</button>
                    </div>
                </div> 

<div className="left">
                        <a href='/#'>
                            <img
                                src={img}
                                alt={`slide-${index + 1}`}
                                className='w-[700px] h-[400px] mx-auto select-none'
                            />
                        </a></div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </section>
    );
};

export default Slider;