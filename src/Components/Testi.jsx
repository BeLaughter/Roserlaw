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
          loop={true} // Enables infinite loop
          spaceBetween={50} // Increase space between slides
          centeredSlides={true}
          autoplay={{
            delay: 3000, // Auto-slide every 3 sec
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true} // Enable next/prev buttons
          effect="coverflow" // Enable the Coverflow effect
          coverflowEffect={{
            rotate: 0, // No rotation
            stretch: 0, // No stretching
            depth: 50, // Less depth to prevent overlap
            modifier: 1.3, // Scale effect (1.3x for center slide)
            slideShadows: false, // Optional: Remove shadow effect
          }}
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          breakpoints={{
            320: {
              slidesPerView: 1, // Show 1 slide on small screens
              centeredSlides: true,
              autoplay: false, // Disable auto-slide on mobile
            },
            768: {
              slidesPerView: 2, // Show 2 slides on tablets
            },
            1024: {
              slidesPerView: 2, // Show 4 slides on large screens
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Testicard
              img="#"
              testimony="Consta"
              name="By Lupita Gomez1"
              occupation="39K"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testicard
              img="#"
              testimony="Consta"
              name="By Lupita Gomez2"
              occupation="39K"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testicard
              img="#"
              testimony="Consta"
              name="By Lupita Gomez3"
              occupation="39K"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testicard
              img="#"
              testimony="Consta"
              name="By Lupita Gomez4"
              occupation="39K"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testicard
              img="#"
              testimony="Consta"
              name="By Lupita Gomez5"
              occupation="39K"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testi;
