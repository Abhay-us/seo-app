import { useEffect } from 'react';
import initScrollReveal from '../../js/scrollReveal';
import { Swiper, SwiperSlide } from "swiper/react";
import swiper from "../../js/swiper";
import { FaQuoteLeft } from 'react-icons/fa';
import img1 from '../../assets/footer/project-1.jpg'
import img2 from '../../assets/footer/project-2.jpg'
import img3 from '../../assets/footer/project-3.jpg'

const Testimonials = () => {
    useEffect(() => {
        const sr = initScrollReveal();
        return () => {
            if (sr && typeof sr.destroy === "function") {
                sr.destroy();
            }
        };
    }, []);
    return (
        <>
            <div className="container-fluid bg-danger hero-container about-banner">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">

                        <div className="col-12 col-md-6 reveal-left">
                            <h1 className="display-3 fw-bold text-secondary mb-0">
                                Testimonials
                            </h1>
                        </div>

                        <div className="col-12 col-md-6 text-md-end reveal-right">
                            <span className="text-secondary">
                                Home
                            </span>

                            <span className="mx-2 text-secondary">
                                /
                            </span>

                            <span className="text-secondary">
                                Pages
                            </span>

                            <span className="mx-2 text-white">
                                /
                            </span>

                            <span className="text-white">
                                Testimonials
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row py-5">
                    <div className="col d-flex flex-column justify-content-center align-items-center ">
                        <h1 className="text-center">
                            <span className="bg-danger px-2 me-1 mt-5 text-white text-uppercase">Testimonials</span> Our Clients Say ! </h1>
                    </div>
                    <div className="row mt-5">

                        <div className="col">

                            <Swiper
                                {...swiper}
                                className="testimonial-swiper"
                            >
                                {/* Slide 1 */}
                                <SwiperSlide>
                                    <div className="testimonial-item">

                                        <div className="testimonial-img">
                                            <img src={img1} alt="Client" />
                                        </div>

                                        <div className="testimonial-card">

                                            <div className="quote-icon">
                                                <FaQuoteLeft />
                                            </div>

                                            <p>
                                                Clita clita tempor justo dolor ipsum amet kasd amet duo
                                                justo duo duo labore sed sed. Magna ut diam sit et amet
                                                stet eos sed clita erat magna elitr erat sit sit erat at
                                                rebum justo sea clita.
                                            </p>

                                            <h3>Alexander Bell</h3>

                                            <span>Programmer</span>

                                        </div>

                                    </div>
                                </SwiperSlide>


                                {/* Slide 2 */}
                                <SwiperSlide>
                                    <div className="testimonial-item">

                                        <div className="testimonial-img">
                                            <img src={img2} alt="Client" />
                                        </div>

                                        <div className="testimonial-card">

                                            <div className="quote-icon">
                                                <FaQuoteLeft />
                                            </div>

                                            <p>
                                                Magna ut diam sit et amet stet eos sed clita erat magna
                                                elitr erat sit sit erat at rebum justo sea clita.
                                            </p>

                                            <h3>Pakura</h3>

                                            <span>Designer</span>

                                        </div>

                                    </div>
                                </SwiperSlide>


                                {/* Slide 3 */}
                                <SwiperSlide>
                                    <div className="testimonial-item">

                                        <div className="testimonial-img">
                                            <img src={img3} alt="Client" />
                                        </div>

                                        <div className="testimonial-card">

                                            <div className="quote-icon">
                                                <FaQuoteLeft />
                                            </div>

                                            <p>
                                                Clita clita tempor justo dolor ipsum amet kasd amet duo
                                                justo duo duo labore sed sed. Magna ut diam sit et amet
                                                stet eos sed clita erat magna elitr erat sit sit erat.
                                            </p>

                                            <h3>Bradley</h3>

                                            <span>Developer</span>

                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-item">

                                        <div className="testimonial-img">
                                            <img src={img1} alt="Client" />
                                        </div>

                                        <div className="testimonial-card">

                                            <div className="quote-icon">
                                                <FaQuoteLeft />
                                            </div>

                                            <p>
                                                Clita clita tempor justo dolor ipsum amet kasd amet duo
                                                justo duo duo labore sed sed. Magna ut diam sit et amet
                                                stet eos sed clita erat magna elitr erat sit sit erat at
                                                rebum justo sea clita.
                                            </p>

                                            <h3>Alexander Bell</h3>

                                            <span>Programmer</span>

                                        </div>

                                    </div>
                                </SwiperSlide>
                            </Swiper>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
export default Testimonials;