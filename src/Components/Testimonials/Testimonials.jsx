import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
    return (
        <div>
              <h1 className="text-[#007bff] text-center font-bold text-4xl my-12">What says our<span className="text-[#00bbf0]">  Customers</span> </h1>
                 <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper p-20"
            >
                <SwiperSlide className='p-20 text-center'>
                <p>
                Our experience with this platform has been exceptional. From seamless transactions to top-notch security features, it s evident that customer satisfaction is their priority. The expert support team adds tremendous value, making our journey in the digital realm smooth and worry-free. Highly recommended!
                    </p>
                    <div className='text-center'>
                    <img className="w-16 h-16 rounded-full mt-4 mx-auto" src="https://i.ibb.co/9c495Nt/istockphoto-1399565382-170667a.webp" alt="profile picture" /> 
                    <h1 className='font-semibold text-xl'>Bonnie Green</h1>
                    
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-20 text-center'>
                <p>
                Incredible service! This platform goes above and beyond with user-friendly features and unparalleled security. Expert support ensures a hassle-free experience. Grateful for a team dedicated to customer satisfaction. A standout in the digital space
                    </p>
                    <div>
                    <img className="w-16 h-16 rounded-full mt-4 mx-auto" src="https://i.ibb.co/bBw9zgX/360-F-224869519-a-Rae-Lneq-ALf-PNBzg0xx-MZXghtv-BXkf-IA.jpg" alt="profile picture" /> 
                    <h1 className='font-semibold text-xl'>Bonnie Green</h1>
                    
                    </div>
                </SwiperSlide>
                <SwiperSlide className='p-20 text-center'>
                    <p>
                    Outstanding service! The platforms user-centric approach, coupled with robust security features, has truly impressed us. Expert support ensures a smooth experience, making it our go-to choice for digital transactions. Highly satisfied and confident in recommending to others!
                    </p>
                    <div>
                    <img className="w-16 h-16 rounded-full mt-4 mx-auto" src="https://i.ibb.co/d0NZMC5/portrait-handsome-caucasian-man-formal-260nw-2142820441.webp" alt="profile picture" /> 
                    <h1 className='font-semibold text-xl'>Bonnie Green</h1>
                    
                    </div>
                </SwiperSlide>
  
            
             
            </Swiper>
            </div>
         
        </div>
    );
};

export default Testimonials;