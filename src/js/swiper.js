import { Autoplay } from "swiper/modules";
const swiper = {
    modules: [Autoplay],

    slidesPerView: 1,
    spaceBetween: 1,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    speed: 900,

    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
};

export default swiper;