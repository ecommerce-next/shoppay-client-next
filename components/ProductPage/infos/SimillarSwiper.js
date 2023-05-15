import Link from "next/link";
import { similar_products } from "../../../data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
const SimilarSwiper = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={5}
      slidesPerGroup={3}
      navigation={true}
      modules={[Navigation]}
      className="swiper simillar_swiper products__swiper"
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 5,
        },
      }}
    >

      {similar_products.map((p) => (
        <SwiperSlide key={p}>
          <Link href="">
            <img src={p} alt="" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SimilarSwiper;
