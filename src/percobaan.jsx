import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper/modules';
export default function Percobaan() {

    return (
        <>
            <div style={{ height: "400px", paddingBlock: "40px" }}>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 2, spaceBetween: 40 },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>
                    <SwiperSlide>1</SwiperSlide>
                    <SwiperSlide>2</SwiperSlide>
                    <SwiperSlide>3</SwiperSlide>
                    <SwiperSlide>4</SwiperSlide>
                    <SwiperSlide>5</SwiperSlide>
                    <SwiperSlide>6</SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}