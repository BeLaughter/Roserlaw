import React from "react";
import "./Testi.css";
import Testicard from "./Testicard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// Import required modules
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

const Testi = () => {
  return (
    <div className="testi">
      <h1 className="text-dark title text-center"> What Our Parents Say !</h1>
      <p className="text-center">
        Parents' testimonials on our school webpage showcase heartfelt
        experiences and positive feedback from families who trust us with their
        children's education. These testimonials highlight the dedication of our
        teachers, the supportive learning environment, academic excellence,
        character development, and the overall growth students experience at our
        school.
      </p>
      {/* testimony slides */}

      <div className="swiper-container">
        <Swiper
          loop={true}
          spaceBetween={30} // Increase space to prevent slides from being too close
          centeredSlides={false} // Ensure slides align properly
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1.3,
            slideShadows: false,
          }}
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          breakpoints={{
            320: {
              slidesPerView: 1, // Show 1 slide on mobile
              centeredSlides: true,
              autoplay: false, // Disable autoplay on mobile
            },
            768: {
              slidesPerView: 2, // Show 2 slides on tablets
            },
            1024: {
              slidesPerView: 2, // Show 2 slides on large screens
              spaceBetween: 50, // Increase spacing to avoid left/right button overlap
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Testicard
              img="https://cdn.pixabay.com/photo/2017/04/21/03/13/paternity-2247485_640.jpg"
              testimony="We love the warm and nurturing environment at Roserlaw. From the first day, our child felt welcomed and supported. The school's commitment to academic excellence and extracurricular activities has given our child a well-rounded education. We couldn't be happier!"
              name="Mr Bolatito"
              occupation="Auditor"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testicard
              img="https://cdn.pixabay.com/photo/2014/11/19/22/36/woman-538396_640.jpg"
              testimony="What I love most about Roserlaw is their focus on holistic education. From academics to sports, arts, and leadership programs, my child is constantly learning and growing."
              name="Mrs Awoyemi"
              occupation="Nutritionist"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testicard
              img="https://cdn.pixabay.com/photo/2015/06/26/13/49/father-822550_640.jpg"
              testimony="As a parent, knowing my child is in a safe, friendly, and disciplined environment gives me peace of mind. The school's commitment to excellence is evident in my child's progress and happiness!"
              name="Mr Thompson"
              occupation="Banker"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testicard
              img="https://cdn.pixabay.com/photo/2016/09/03/09/18/girl-1641215_640.jpg"
              testimony="Enrolling my child at Roserlaw was the best decision we ever made! The teachers are incredibly dedicated, and the school provides a nurturing environment where students thrive academically and socially."
              name="Mr Adeleke"
              occupation="Bussiness Manager"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testicard
              img="https://cdn.pixabay.com/photo/2024/09/16/04/14/family-9050396_640.jpg"
              testimony="The educators at Roserlaw truly care about every child's growth. They go above and beyond to ensure students not only excel in academics but also develop confidence and strong character."
              name="Mr and Mrs Ahmed"
              occupation="Traders"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testi;
