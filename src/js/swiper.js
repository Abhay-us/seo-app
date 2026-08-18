import { Autoplay } from "swiper/modules";
const swiper = {
    modules: [Autoplay],

    slidesPerView: 1.8,
    spaceBetween: 1,
    centeredSlides: true,


    rewind: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    speed: 800,
};

export default swiper;