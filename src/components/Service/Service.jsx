import { FaLaptop, FaMobileAlt } from 'react-icons/fa';
import './service.css'
import { BsGraphUpArrow } from 'react-icons/bs';
import { IoShareSocial } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaArrowPointer } from 'react-icons/fa6';
import { useEffect } from 'react';
import initScrollReveal from '../../js/scrollReveal';

const Service = () => {
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
            <div className="container-fluid bg-danger about-banner">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">

                        <div className="col-12 col-md-6 reveal-left">
                            <h1 className="display-3 fw-bold text-secondary mb-0">
                                Service
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
                                Services
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            {/* /service -content */}
            <div className="container-fluid mb-5 service-container">
                <div className="container pt-5 mt-5 ">
                    <div className="text-center reveal">
                        <h1>
                            <span className="bg-danger text-white me-3 px-2 py-1">
                                Services
                            </span>
                            What Solutions We Provide
                        </h1>
                    </div>
                    <div className="row mt-5  gap-3 g-5">
                        <div className="col-12 col-md-6 col-lg p-0 reveal service-div  ">
                            <div className="d-flex">
                                <div className="bg-danger d-flex align-items-center justify-content-center service-icon">
                                    <p className=" ">
                                        <BsGraphUpArrow className="display-5   text-white feature-icon" />
                                    </p>
                                </div>
                                <h4 className="mt-4 mb-2 fw-bolder ms-4">SEO Optimization</h4>
                            </div>

                            <p className="ps-5 py-3">
                                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna
                            </p>
                            <a className="btn bg-secondary mb-5  text-white px-3 mt-3 mx-5" href="">Read More</a>
                        </div>
                        <div className="col-12 col-md-6 col-lg p-0 reveal service-div  ">
                            <div className="d-flex">
                                <div className="bg-danger d-flex align-items-center justify-content-center service-icon">
                                    <p className=" ">
                                        <FaLaptop className="display-5   text-white feature-icon" />
                                    </p>
                                </div>
                                <h4 className="mt-4 mb-2 fw-bolder ms-4">
                                    Web Design</h4>
                            </div>

                            <p className="ps-5 py-3">
                                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna
                            </p>
                            <a className="btn bg-secondary mb-5  text-white px-3 mt-3 mx-5" href="">Read More</a>
                        </div>
                        <div className="col-12 col-md-6 col-lg p-0 reveal service-div  ">
                            <div className="d-flex">
                                <div className="bg-danger d-flex align-items-center justify-content-center service-icon">
                                    <p className=" ">
                                        < IoShareSocial className="display-5   text-white feature-icon" />
                                    </p>
                                </div>
                                <h4 className="mt-4 mb-2 fw-bolder ms-4">Social Marketing</h4>
                            </div>

                            <p className="ps-5 py-3">
                                Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna
                            </p>
                            <a className="btn bg-secondary mb-5  text-white px-3 mt-3 mx-5" href="">Read More</a>
                        </div>
                        <div className="row mt-5  gap-3 g-5">
                            <div className="col-12 col-md-6 col-lg p-0 reveal service-div ">
                                <div className="d-flex">
                                    <div className="bg-danger d-flex align-items-center justify-content-center service-icon">
                                        <p className=" ">
                                            <MdEmail className="display-6   text-white feature-icon" />
                                        </p>
                                    </div>
                                    <h4 className="mt-4 mb-2 fw-bolder ms-4">Email Marketing</h4>
                                </div>

                                <p className="ps-5 py-3">
                                    Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna
                                </p>
                                <a className="btn bg-secondary mb-5  text-white px-3 mt-3 mx-5" href="">Read More</a>
                            </div>
                            <div className="col-12 col-md-6 col-lg p-0 reveal service-div  ">
                                <div className="d-flex">
                                    <div className="bg-danger d-flex align-items-center justify-content-center service-icon">
                                        <p className=" ">
                                            <FaArrowPointer className="display-6   text-white feature-icon" />
                                        </p>
                                    </div>
                                    <h4 className="mt-4 mb-2 fw-bolder ms-4">PPC Advertising</h4>
                                </div>

                                <p className="ps-5 py-3">
                                    Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna
                                </p>
                                <a className="btn bg-secondary mb-5  text-white px-3 mt-3 mx-5" href="">Read More</a>
                            </div>
                            <div className="col-12 col-md-6 col-lg p-0 reveal service-div  ">
                                <div className="d-flex">
                                    <div className="bg-danger d-flex align-items-center justify-content-center service-icon">
                                        <p className=" ">
                                            <FaMobileAlt className="display-6   text-white feature-icon" />
                                        </p>
                                    </div>
                                    <h4 className="mt-4 mb-2 fw-bolder ms-4">
                                        App Development</h4>
                                </div>

                                <p className="ps-5 py-3">
                                    Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna
                                </p>
                                <a className="btn bg-secondary mb-5  text-white px-3 mt-3 mx-5" href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* free Quote */}
            <div className="conatiner-fluid bg-danger">
                <div className="conatiner py-5">
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
        </>
    );
};
export default Service;