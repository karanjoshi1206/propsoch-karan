import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

interface ISlidesProps {
  data?: any[];
  renderData?: any;
}

const Slides = ({ data = [], renderData }: ISlidesProps) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item: any) => (
          <SwiperSlide key={item.id}>{renderData(item)}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slides;
