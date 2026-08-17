import { useEffect } from "react";
import './about.css'
import aboutimg from "../../assets/hero/about.png";
import {
    FaCheck,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaTrophy,
    FaStar,

} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbCoffee } from "react-icons/tb";
import post01 from '../../assets/hero/team/post-01.png'
import post02 from '../../assets/hero/team/post-02.png'
import post03 from '../../assets/hero/team/post-03.png'
import post04 from '../../assets/hero/team/post-04.png'
import { initScrollReveal } from "../../js/scrollReveal";


const About = () => {

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
                    <div className="row h-100 align-items-center ">

                        <div className="col-12 col-md-6 reveal-left">
                            <h1 className="display-3 fw-bold text-secondary mb-0">
                                About Us
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
                                About
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            {/* about start */}

            <div className="container mt-5 reveal-bottom">
                <div className="row pt-4">
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src={aboutimg} alt="img" />
                    </div>

                    <div className="col-12 col-md-6 mt-5 ">
                        <h1 className="">
                            <span className="bg-danger text-white px-2 py-1 me-2">ABOUT</span>
                            The Best SEO Solution With 10 Years of Experience
                        </h1>
                        <p className="mt-4">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
                            sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
                            et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                            tempor eirmod magna dolore erat amet
                        </p>
                        <p className="my-4">
                            Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
                            sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                            tempor.
                        </p>
                        <div className="row">
                            <div className="col-12 col-md-6 ">
                                <h6>
                                    <FaCheck className="text-danger me-3" />
                                    Award Winning
                                </h6>
                                <h6>
                                    <FaCheck className="text-danger me-3" />
                                    Professional Staff
                                </h6>
                            </div>
                            <div className="col-12 col-md-6">
                                <h6>
                                    <FaCheck className="text-danger me-3" />
                                    24/7 Support
                                </h6>
                                <h6>
                                    <FaCheck className="text-danger me-3" />
                                    Fair Prices
                                </h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap gap-3 mt-3">
                            <a className="text-white bg-danger p-4 py-3 ">Read More</a>
                            <a className="bg-secondary btn-square">
                                <FaFacebookF className=" fs-6   text-white" />
                            </a>
                            <a className="bg-secondary btn-square">
                                <FaTwitter className=" fs-6    text-white" />
                            </a>
                            <a className="bg-secondary btn-square">
                                <FaInstagram className=" fs-6    text-white" />
                            </a>
                            <a className="bg-secondary btn-square">
                                <FaLinkedin className=" fs-6    text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* /about end  */}

            <div className="container-fluid bg-danger my-5">
                <div className="container py-5">
                    <div className="row  py-5 g-4">
                        <div className="col-6 col-md-3 reveal-left">
                            <div className="d-flex    ">
                                <div className="btn-square bg-secondary">
                                    <FaStar className="text-white  fs-5 " />
                                </div>
                                <div className="d-flex flex-column ms-3 btn-square">
                                    <p
                                        className="text-white 
                                 fs-6"
                                    >
                                        Years
                                    </p>
                                    <p
                                        className="text-white 
                                 fs-4 fw-bolder"
                                    >
                                        1234
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 reveal-left">
                            <div className="d-flex align-items-center   ">
                                <div className="btn-square bg-secondary">
                                    <FaPeopleGroup className="text-white  fs-5 " />
                                </div>
                                <div className="d-flex flex-column ms-3 btn-square">
                                    <p
                                        className="text-white 
                                 fs-6"
                                    >
                                        Clients
                                    </p>
                                    <p
                                        className="text-white 
                                 fs-4 fw-bolder"
                                    >
                                        1234
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 reveal-left">
                            <div className="d-flex align-items-center   ">
                                <div className="btn-square bg-secondary">
                                    <FaTrophy className="text-white  fs-5 " />
                                </div>
                                <div className="d-flex flex-column ms-3 btn-square">
                                    <p
                                        className="text-white 
                                 fs-6"
                                    >
                                        Awards
                                    </p>
                                    <p
                                        className="text-white 
                                 fs-4 fw-bolder"
                                    >
                                        1234
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 reveal-left">
                            <div className="d-flex align-items-center   ">
                                <div className="btn-square bg-secondary">
                                    <TbCoffee className="text-white  fs-5 " />
                                </div>
                                <div className="d-flex flex-column ms-3 btn-square">
                                    <p
                                        className="text-white 
                                 fs-6"
                                    >
                                        Events
                                    </p>
                                    <p
                                        className="text-white 
                                 fs-4 fw-bolder"
                                    >
                                        1234
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* /feature */}
            <div className="container pt-5 my-5 reveal-top">
                <div className="text-center">
                    <h1>
                        <span className="bg-danger text-white me-3 px-2 py-1">
                            FEATURES
                        </span>
                        Why People Choose Us!
                    </h1>
                </div>
                <div className="row mt-5 g-4">
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <p>
                            <BsGraphUpArrow className="display-4   text-danger feature-icon" />
                        </p>
                        <h4 className="mt-4 mb-2 fw-bold">Provern Results</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur
                            adipisicing elite.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <p>
                            <BsGraphUpArrow className="display-4   text-danger feature-icon" />
                        </p>
                        <h4 className="mt-4 mb-2 fw-bold">Provern Results</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur
                            adipisicing elite.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <p>
                            <BsGraphUpArrow className="display-4   text-danger feature-icon" />
                        </p>
                        <h4 className="mt-4 mb-2 fw-bold">Provern Results</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur
                            adipisicing elite.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <p>
                            <BsGraphUpArrow className="display-4   text-danger feature-icon" />
                        </p>
                        <h4 className="mt-4 mb-2 fw-bold">Provern Results</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur
                            adipisicing elite.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <p>
                            <BsGraphUpArrow className="display-4   text-danger feature-icon" />
                        </p>
                        <h4 className="mt-4 mb-2 fw-bold">Provern Results</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur
                            adipisicing elite.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center">
                        <p>
                            <BsGraphUpArrow className="display-4   text-danger feature-icon" />
                        </p>
                        <h4 className="mt-4 mb-2 fw-bold">Provern Results</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur
                            adipisicing elite.
                        </p>
                    </div>
                </div>
            </div>
            {/* feature-2 end */}

            <div className="container-fluid bg-danger my-5">
                <div className="container py-5">
                    <div className="row  py-5 g-4">
                        <div className="col-6 col-md-3 reveal-left">
                            <div className="d-flex    ">
                                <div className="btn-square bg-secondary">
                                    <FaStar className="text-white  fs-5 " />
                                </div>
                                <div className="d-flex flex-column ms-3 btn-square">
                                    <p
                                        className="text-white 
                                 fs-6"
                                    >
                                        Years
                                    </p>
                                    <p
                                        className="text-white 
                                 fs-4 fw-bolder"
                                    >
                                        1234
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 reveal-left">
                            <div className="d-flex align-items-center   ">
                                <div className="btn-square bg-secondary">
                                    <FaPeopleGroup className="text-white  fs-5 " />
                                </div>
                                <div className="d-flex flex-column ms-3 btn-square">
                                    <p
                                        className="text-white 
                                 fs-6"
                                    >
                                        Clients
                                    </p>
                                    <p
                                        className="text-white 
                                 fs-4 fw-bolder"
                                    >
                                        1234
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 reveal-left">
                            <div className="d-flex align-items-center   ">
                                <div className="btn-square bg-secondary">
                                    <FaTrophy className="text-white  fs-5 " />
                                </div>
                                <div className="d-flex flex-column ms-3 btn-square">
                                    <p
                                        className="text-white 
                                 fs-6"
                                    >
                                        Awards
                                    </p>
                                    <p
                                        className="text-white 
                                 fs-4 fw-bolder"
                                    >
                                        1234
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 reveal-left">
                            <div className="d-flex align-items-center   ">
                                <div className="btn-square bg-secondary">
                                    <TbCoffee className="text-white  fs-5 " />
                                </div>
                                <div className="d-flex flex-column ms-3 btn-square">
                                    <p
                                        className="text-white 
                                 fs-6"
                                    >
                                        Events
                                    </p>
                                    <p
                                        className="text-white 
                                 fs-4 fw-bolder"
                                    >
                                        1234
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* out team */}
            <div className="container my-5 reveal-top">
                <div className="row my-5">
                    <div className="col mt-5 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="text-center">
                            <span className="bg-danger px-2 me-2 mt-5 text-white text-uppercase">Team</span>Meet Our Team Members </h1>
                    </div>
                </div >
                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-3 team-div position-relative overflow-hidden">
                        <img className="img-100 w-100" src={post01} alt="img" />

                        <div className="team-left-overlay"></div>
                        <div className="team-right-overlay"></div>

                        <div className="team-content position-absolute top-50 start-50 translate-middle text-center text-white">
                            <h4 className="fw-bold">Boris Johnson</h4>
                            <p className="py-3">Founder & CEO</p>

                            <div className="d-flex gap-2">
                                <a className="btn bg-secondary text-white"><FaFacebookF /></a>
                                <a className="btn bg-secondary text-white"><FaTwitter /></a>
                                <a className="btn bg-secondary text-white"><FaInstagram /></a>
                                <a className="btn bg-secondary text-white"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 team-div position-relative overflow-hidden">
                        <img className="img-100 w-100" src={post02} alt="img" />

                        <div className="team-left-overlay"></div>
                        <div className="team-right-overlay"></div>

                        <div className="team-content position-absolute top-50 start-50 translate-middle text-center text-white">
                            <h4 className="fw-bold">Boris Johnson</h4>
                            <p className="py-3">Founder & CEO</p>

                            <div className="d-flex gap-2">
                                <a className="btn bg-secondary text-white"><FaFacebookF /></a>
                                <a className="btn bg-secondary text-white"><FaTwitter /></a>
                                <a className="btn bg-secondary text-white"><FaInstagram /></a>
                                <a className="btn bg-secondary text-white"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 team-div position-relative overflow-hidden">
                        <img className="w-100" src={post03} alt="img" />

                        <div className="team-left-overlay"></div>
                        <div className="team-right-overlay"></div>

                        <div className="team-content position-absolute top-50 start-50 translate-middle text-center text-white">
                            <h4 className="fw-bold">Boris Johnson</h4>
                            <p className="py-3">Founder & CEO</p>

                            <div className="d-flex gap-2">
                                <a className="btn bg-secondary text-white"><FaFacebookF /></a>
                                <a className="btn bg-secondary text-white"><FaTwitter /></a>
                                <a className="btn bg-secondary text-white"><FaInstagram /></a>
                                <a className="btn bg-secondary text-white"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 team-div position-relative overflow-hidden">
                        <img className="img-100 w-100" src={post04} alt="img" />

                        <div className="team-left-overlay"></div>
                        <div className="team-right-overlay"></div>

                        <div className="team-content position-absolute top-50 start-50 translate-middle text-center text-white">
                            <h4 className="fw-bold">Boris Johnson</h4>
                            <p className="py-3">Founder & CEO</p>

                            <div className="d-flex gap-2">
                                <a className="btn bg-secondary text-white"><FaFacebookF /></a>
                                <a className="btn bg-secondary text-white"><FaTwitter /></a>
                                <a className="btn bg-secondary text-white"><FaInstagram /></a>
                                <a className="btn bg-secondary text-white"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div >

        </>
    );
};
export default About;