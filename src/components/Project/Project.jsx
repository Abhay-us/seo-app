import { BsGraphUpArrow } from 'react-icons/bs';
import initScrollReveal from '../../js/scrollReveal';
import './project.css'
import '../Pages/testimonial.css'
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaArrowPointer } from 'react-icons/fa6';
import { FaLaptop, FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import swiper from "../../js/swiper";
import img1 from '../../assets/footer/project-1.jpg'
import img2 from '../../assets/footer/project-2.jpg'
import img3 from '../../assets/footer/project-3.jpg'

const Project = () => {
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
                                Projects
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
                                Projects
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container py-5 my-5 ">
                <div className="text-center reveal">
                    <h1>
                        <span className="bg-danger text-white me-3 px-2 py-1">
                            PROJECTS
                        </span>
                        Recently Completed Projects
                    </h1>
                </div>
                <div className="row mt-5 g-4">
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <div className="service-div p-4 reveal project-div">
                            <p className="text-center">
                                <span className="project-icon d-inline-flex justify-content-center align-items-center rounded-circle">
                                    <BsGraphUpArrow className="fs-1  feature-icon" />
                                </span>
                            </p>
                            <h4 className="mt-4 mb-2 fw-bold">SEO OPtimization</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur
                                adipisicing elite.
                            </p>
                            <Link className="btn bg-secondary mb-5 text-white px-3 mt-3 mx-5" to="/project/details">Read More</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <div className="service-div p-4 reveal project-div">
                            <p className="text-center">
                                <span className="project-icon d-inline-flex justify-content-center align-items-center rounded-circle">
                                    <FaLaptop className="fs-1  feature-icon" />
                                </span>
                            </p>
                            <h4 className="mt-4 mb-2 fw-bold">Web OPtimization</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur
                                adipisicing elite.
                            </p>
                            <Link className="btn bg-secondary mb-5 text-white px-3 mt-3 mx-5" to="/project/details">Read More</Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <div className="service-div p-4 reveal project-div">
                            <p className="text-center">
                                <span className="project-icon d-inline-flex justify-content-center align-items-center rounded-circle">
                                    <BsGraphUpArrow className="fs-1  feature-icon" />
                                </span>
                            </p>
                            <h4 className="mt-4 mb-2 fw-bold">SEO OPtimization</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur
                                adipisicing elite.
                            </p>
                            <Link className="btn bg-secondary mb-5 text-white px-3 mt-3 mx-5" to="/project/details">Read More</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <div className="service-div p-4 reveal project-div">
                            <p className="text-center">
                                <span className="project-icon d-inline-flex justify-content-center align-items-center rounded-circle">
                                    <FaArrowPointer className="fs-1  feature-icon" />
                                </span>
                            </p>
                            <h4 className="mt-4 mb-2 fw-bold">PPc Advertising</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur
                                adipisicing elite.
                            </p>
                            <Link className="btn bg-secondary mb-5 text-white px-3 mt-3 mx-5" to="/project/details">Read More</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <div className="service-div p-4 reveal project-div">
                            <p className="text-center">
                                <span className="project-icon d-inline-flex justify-content-center align-items-center rounded-circle">
                                    <BsGraphUpArrow className="fs-1  feature-icon" />
                                </span>
                            </p>
                            <h4 className="mt-4 mb-2 fw-bold">SEO OPtimization</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur
                                adipisicing elite.
                            </p>
                            <Link className="btn bg-secondary mb-5 text-white px-3 mt-3 mx-5" to="/project/details">Read More</Link>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <div className="service-div p-4 reveal project-div">
                            <p className="text-center">
                                <span className="project-icon d-inline-flex justify-content-center align-items-center rounded-circle">
                                    <BsGraphUpArrow className="fs-1  feature-icon" />
                                </span>
                            </p>
                            <h4 className="mt-4 mb-2 fw-bold">SEO OPtimization</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur
                                adipisicing elite.
                            </p>
                            <Link className="btn bg-secondary mb-5 text-white px-3 mt-3 mx-5" to="/project/details">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* free Quote */}
            <div className="conatiner-fluid bg-danger my-5">
                <div className="conatiner  py-5">
                    <div className="row py-5 justify-content-center">
                        <div className="col-12 col-lg-6 p-5  bg-white quote-box">

                            <h1 className="text-center fw-bold mb-5">
                                Get A Free
                                <span className="bg-danger text-white px-2 ms-2">
                                    QUOTE
                                </span>
                            </h1>

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="quote-field ">
                                        <label htmlFor="name">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="bg-transparent w-100 border-0 outline-0"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="quote-field">
                                        <label htmlFor="email">Your Email</label>
                                        <input
                                            type="email"
                                            id="email" className="bg-transparent w-100 border-0 outline-0"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="quote-field ">
                                        <label htmlFor="mobile">Your Mobile</label>
                                        <input
                                            type="text"
                                            id="mobile" className="bg-transparent w-100 border-0 outline-0"
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="quote-field">
                                        <label htmlFor="service">Service Type</label>
                                        <select id="service" className="bg-transparent w-100 border-0 outline-0">
                                            <option value="">Select Service</option>
                                            <option value="seo">SEO</option>
                                            <option value="web">Web Design</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="quote-field message-field">
                                        <label htmlFor="message">Message</label>
                                        <textarea id="message" className="bg-transparent w-100 border-0 outline-0"></textarea>
                                    </div>
                                </div>

                                <div className="col-12 text-center mt-3">
                                    <button className="btn btn-danger px-4 py-3 sub-btn" >
                                        Submit Now
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* end */}


            {/* testimonials */}
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
                            </Swiper>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
export default Project;
