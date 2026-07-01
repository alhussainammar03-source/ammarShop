import React from "react";
import Product from "./Product";
import "./slideProduct.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

function SlideProduct({ data, title }) {
  return (
    <div className="slide_products slide">
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            x?
          </p>
        </div>

        <Swiper
          loop={data.length > 5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={8}
          navigation={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            600: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Product item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideProduct;
