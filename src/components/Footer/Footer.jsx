import './footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
    FaCheck,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

import { IoIosArrowForward } from "react-icons/io";

import img1 from '../../assets/footer/project-1.jpg'
import img2 from '../../assets/footer/project-2.jpg'
import img3 from '../../assets/footer/project-3.jpg'
import img4 from '../../assets/footer/project-4.jpg'
import img5 from '../../assets/footer/project-5.jpg'
import img6 from '../../assets/footer/project-6.jpg'
import { useEffect } from "react";
import { initScrollReveal } from "../../js/scrollReveal";
import { Link } from "react-router-dom";

const Footer = () => {
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
            <footer className="footer-section text-white">
                <div className="container py-5">

                    <div className="row g-5">

                        {/* SEOcom */}
                        <div className="col-lg-3 col-md-6 reveal">
                            <h2 className="fw-bold text-white mb-4">
                                SEOcom
                            </h2>

                            <p className="text-white-50 lh-lg mb-0">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                                et tempor sit. Aliqu diam amet diam et eos labore. Clita
                                erat ipsum et lorem et sit, sed stet no labore lorem sit.
                                Sanctus clita duo justo et tempor
                            </p>
                        </div>


                        {/* Get In Touch */}
                        <div className="col-lg-3 col-md-6 reveal ">
                            <h4 className="fw-bold text-white mb-4">
                                Get In Touch
                            </h4>

                            <p className="text-white-50 mb-3">
                                <FaLocationDot className='me-1 mb-1' />
                                123 Street, New York, USA
                            </p>

                            <p className="text-white-50 mb-3">
                                <BsFillTelephoneFill className='me-1 mb-1' />
                                +012 345 67890
                            </p>

                            <p className="text-white-50 mb-4">
                                <FaLocationDot className='me-1 mb-1' />
                                info@example.com
                            </p>

                            <div className="d-flex gap-2 ">
                                <Link to="/contact" aria-label="Contact SEOcom" className="btn btn-danger pb-2">
                                    <FaCheck />
                                </Link>

                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Visit Facebook" className="btn btn-danger ">
                                    <FaFacebookF />
                                </a>

                                <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="Visit X" className="btn btn-danger">
                                    <FaTwitter />

                                </a>

                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="Visit LinkedIn" className="btn btn-danger">
                                    <FaLinkedin />

                                </a>

                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Visit Instagram" className="btn btn-danger">
                                    <FaInstagram />

                                </a>
                            </div>
                        </div>


                        {/* Popular Link */}
                        <div className="col-lg-3 col-md-6 reveal">
                            <h4 className="fw-bold text-white mb-4">
                                Popular Link
                            </h4>

                            <div className="d-flex flex-column gap-3 ">
                                <div>
                                    <IoIosArrowForward className='mb-1 text-white-50 me-1' />
                                    <Link to="/about" className="text-decoration-none d-inline-block link-a">
                                        About Us
                                    </Link>
                                </div>
                                <div>
                                    <IoIosArrowForward className='mb-1 text-white-50 me-1' />
                                    <Link to="/contact" className="text-decoration-none d-inline-block link-a">
                                        Contact Us
                                    </Link>
                                </div>
                                <div>
                                    <IoIosArrowForward className='mb-1 text-white-50 me-1' />
                                    <Link to="/contact" className="text-decoration-none d-inline-block link-a">
                                        Terms & Condition
                                    </Link>
                                </div>
                                <div>
                                    <IoIosArrowForward className='mb-1 text-white-50 me-1' />
                                    <Link to="/contact" className="text-decoration-none d-inline-block link-a">
                                        Career
                                    </Link>
                                </div>
                                <div>
                                    <IoIosArrowForward className='mb-1 text-white-50 me-1' />
                                    <Link to="/contact" className="text-decoration-none d-inline-block link-a">
                                        Privacy Policy
                                    </Link>
                                </div>



                            </div>
                        </div>


                        {/* Project Gallery */}
                        <div className="col-lg-3 col-md-6 reveal">
                            <h4 className="fw-bold text-white mb-4">
                                Project Gallery
                            </h4>

                            <div className="row g-2">

                                <div className="col-4">
                                    <img
                                        src={img1}
                                        className="img-fluid rounded gallery-img"
                                        alt=""
                                    />
                                </div>

                                <div className="col-4">
                                    <img
                                        src={img2}
                                        className="img-fluid rounded gallery-img"
                                        alt=""
                                    />
                                </div>

                                <div className="col-4">
                                    <img
                                        src={img3}

                                        className="img-fluid rounded gallery-img"
                                        alt=""
                                    />
                                </div>

                                <div className="col-4">
                                    <img
                                        src={img4}
                                        className="img-fluid rounded gallery-img"
                                        alt=""
                                    />
                                </div>

                                <div className="col-4">
                                    <img
                                        src={img5}
                                        className="img-fluid rounded gallery-img"
                                        alt=""
                                    />
                                </div>

                                <div className="col-4">
                                    <img
                                        src={img6}
                                        className="img-fluid rounded gallery-img"
                                        alt=""
                                    />
                                </div>

                            </div>
                        </div>

                    </div>


                    {/* Bottom */}
                    <div className="border-top border-secondary mt-5 pt-4 reveal">

                        <div className="row align-items-center">

                            <div className="col-md-6">
                                <p className="text-white-50 mb-0">
                                    © Your Site Name, All Right Reserved.
                                    Designed By
                                    <a
                                        href="https://htmlcodex.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-white-50 ms-1"
                                    >
                                        HTML Codex
                                    </a>
                                </p>
                            </div>

                            <div className="col-md-6">
                                <div className="d-flex justify-content-md-end justify-content-start gap-4 mt-3 mt-md-0">
                                    <Link to="/" className="text-white-50 text-decoration-none">
                                        Home
                                    </Link>

                                    <Link to="/page/faqs" className="text-white-50 text-decoration-none">
                                        Cookies
                                    </Link>

                                    <Link to="/contact" className="text-white-50 text-decoration-none">
                                        Help
                                    </Link>

                                    <Link to="/page/faqs" className="text-white-50 text-decoration-none">
                                        FAQs
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </footer >
        </>
    );
};
export default Footer;
