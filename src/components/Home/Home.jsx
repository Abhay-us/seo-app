import { useEffect } from "react";
import "./home.css";
import heroimg from "../../assets/hero/hero-header.png";
import aboutimg from "../../assets/hero/about.png";
import {
    FaCheck,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaTrophy,
    FaStar,
    FaLaptop, FaMobileAlt
} from "react-icons/fa";
import { FaPeopleGroup, FaArrowPointer, } from "react-icons/fa6";
import { MdOutlineSupportAgent, MdEmail } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { BsGraphUpArrow, BsSendFill } from "react-icons/bs";
import { TbCoffee } from "react-icons/tb";
import { IoShareSocial } from "react-icons/io5";
import post01 from '../../assets/hero/team/post-01.png'
import post02 from '../../assets/hero/team/post-02.png'
import post03 from '../../assets/hero/team/post-03.png'
import post04 from '../../assets/hero/team/post-04.png'
import { initScrollReveal } from "../../js/scrollReveal";


const Home = () => {

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
            {/* hero start */}
            <div className="container-fluid bg-danger pt-5 ">
                <div className="container pt-5 ">
                    <div className="row py-5">
                        <div className="col-12 col-md-6 ">
                            <h1 className="display-5 fw-bold hero-content">
                                All in One
                                <span className="text-white ms-3">SEO TOOL</span>
                            </h1>
                            <h1 className="display-5 fw-bold">
                                Need to Grow Your Business Rapidly
                            </h1>
                            <p className="mt-3 d-inline-block rounded text-white fs-5 p-3 hero-p ">
                                An Award Winning Agency Since 1990
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img className="img-fluid" src={heroimg} alt="img" />
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
                                <h6 className="reveal-sequential">
                                    <FaCheck className="text-danger me-3" />
                                    Award Winning
                                </h6>
                                <h6 className="reveal-sequential">
                                    <FaCheck className="text-danger me-3" />
                                    Professional Staff
                                </h6>
                            </div>
                            <div className="col-12 col-md-6">
                                <h6 className="reveal-sequential">
                                    <FaCheck className="text-danger me-3" />
                                    24/7 Support
                                </h6>
                                <h6 className="reveal-sequential">
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

            {/* feature starts */}
            <div className="container-fluid bg-danger mt-5">
                <div className="container py-5">
                    <div className="row  py-5 g-4">
                        <div className="col-6 col-md-3">
                            <div className="d-flex   reveal-left ">
                                <div className="btn-square bg-secondary">
                                    <FaStar className="text-white  fs-5 " />
                                </div>
                                <p
                                    className="text-white ms-3 m-0
                                 fs-5"
                                >
                                    Award Winning
                                </p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 reveal-left">
                            <div className="d-flex align-items-center reveal-sequential  ">
                                <div className="btn-square bg-secondary">
                                    <FaPeopleGroup className="text-white  fs-5 " />
                                </div>
                                <p
                                    className="text-white ms-3 m-0
                                 fs-5"
                                >
                                    Professional Staff
                                </p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 reveal-left">
                            <div className="d-flex align-items-center reveal-sequential  ">
                                <div className="btn-square bg-secondary">
                                    <MdOutlineSupportAgent className="text-white  fs-5 " />
                                </div>
                                <p
                                    className="text-white ms-3 m-0
                                 fs-5"
                                >
                                    24/7 Support
                                </p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 reveal-left">
                            <div className="d-flex align-items-center reveal-sequential  ">
                                <div className="btn-square bg-secondary">
                                    <BsCash className="text-white  fs-5 " />
                                </div>
                                <p
                                    className="text-white ms-3 m-0
                                 fs-5"
                                >
                                    Fair Prices
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* feature end */}
            {/* feature info start */}
            <div className="container pt-5 mt-5">
                <div className="text-center">
                    <h1>
                        <span className="bg-danger text-white me-3 px-2 py-1">
                            FEATURES
                        </span>
                        Why People Choose Us!
                    </h1>
                </div>
                <div className="row mt-5 g-4">
                    <div className="col-12 col-md-6 col-lg-4 text-center reveal-left">
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
                    <div className="col-12 col-md-6 col-lg-4 text-center reveal-sequential">
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
                    <div className="col-12 col-md-6 col-lg-4 text-center reveal-sequential">
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
                    <div className="col-12 col-md-6 col-lg-4 text-center reveal-sequential">
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
                    <div className="col-12 col-md-6 col-lg-4 text-center reveal-sequential">
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
                    <div className="col-12 col-md-6 col-lg-4 text-center reveal-sequential">
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

            {/* service start */}
            <div className="container-fluid bg-danger mt-5">
                <div className="container py-5">
                    <div className="row  py-5 g-4">
                        <div className="col-6 col-md-3">
                            <div className="d-flex   reveal-left ">
                                <div className="btn-square bg-secondary">
                                    <FaStar className="text-white  fs-5 " />
                                </div>
                                <div className="d-flex flex-column ms-3 btn-square ">
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
                        <div className="col-6 col-md-3">
                            <div className="d-flex align-items-center   reveal-sequential">
                                <div className="btn-square bg-secondary">
                                    <FaPeopleGroup className="text-white  fs-5 " />
                                </div>
                                <div className="d-flex flex-column ms-3 btn-square ">
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
                        <div className="col-6 col-md-3">
                            <div className="d-flex align-items-center   reveal-sequential">
                                <div className="btn-square bg-secondary">
                                    <FaTrophy className="text-white  fs-5 " />
                                </div>
                                <div className="d-flex flex-column ms-3 btn-square ">
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
                        <div className="col-6 col-md-3">
                            <div className="d-flex align-items-center   reveal-sequential">
                                <div className="btn-square bg-secondary">
                                    <TbCoffee className="text-white  fs-5 " />
                                </div>
                                <div className="d-flex flex-column ms-3 btn-square ">
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
                        <div className="col-12 col-md-6 col-lg service-div reveal ">
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
                        <div className="col-12 col-md-6 col-lg service-div reveal ">
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
                        <div className="col-12 col-md-6 col-lg service-div reveal ">
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
                            <div className="col-12 col-md-6 col-lg service-div reveal">
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
                            <div className="col-12 col-md-6 col-lg service-div reveal ">
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
                            <div className="col-12 col-md-6 col-lg service-div reveal ">
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


            {/* /projects */}
            <div className="container pt-5 mt-5">
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
                            <a className="btn bg-secondary mb-5  text-white px-3 mt-3 mx-5" href="">Read More</a>
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
                            <a className="btn bg-secondary mb-5  text-white px-3 mt-3 mx-5" href="">Read More</a>
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
                            <a className="btn bg-secondary mb-5  text-white px-3 mt-3 mx-5" href="">Read More</a>
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
                            <a className="btn bg-secondary mb-5  text-white px-3 mt-3 mx-5" href="">Read More</a>
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
                            <a className="btn bg-secondary mb-5  text-white px-3 mt-3 mx-5" href="">Read More</a>
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
                            <a className="btn bg-secondary mb-5  text-white px-3 mt-3 mx-5" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>




            {/* newsletter */}
            <div className="container-fluid bg-danger mt-5 " >
                <div className="container py-5">
                    <div className="row  py-5">
                        <div className="col d-flex flex-column justify-content-center align-items-center reveal">
                            <h1 className="text-white text-center">Subscribe the
                                <span className="bg-white ms-2 px-2 text-danger text-uppercase">Newsletter</span> </h1>
                            <div className="position-relative mt-4 w-50 newsletter">
                                <input className="form-control px-4 py-3" type="text" placeholder="Enter Your Email " />
                                <button className="position-absolute top-0 end-0 border-0 me-3 bg-transparent"><BsSendFill className="text-danger fs-3 my-3 " /></button>
                            </div>
                            <p className="mt-3" >Diam sed sed dolor stet amet eirmod</p>

                        </div>
                    </div>
                </div>
            </div>


            {/* out team */}
            <div className="container my-5">
                <div className="row my-5">
                    <div className="col mt-5 d-flex flex-column justify-content-center align-items-center reveal">
                        <h1 className="text-center">
                            <span className="bg-danger px-2 me-2 mt-5 text-white text-uppercase">Team</span>Meet Our Team Members </h1>
                    </div>
                </div >
                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-3 team-div position-relative overflow-hidden reveal-left">
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
                    <div className="col-12 col-md-6 col-lg-3 team-div position-relative overflow-hidden reveal-sequential">
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
                    <div className="col-12 col-md-6 col-lg-3 team-div position-relative overflow-hidden reveal-sequential">
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
                    <div className="col-12 col-md-6 col-lg-3 team-div position-relative overflow-hidden reveal-sequential">
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
            </div>


            {/* testimonials */}
            <div className="container my-5">
                <div className="row pt-5">
                    <div className="col d-flex flex-column justify-content-center align-items-center ">
                        <h1 className="text-center">
                            <span className="bg-danger px-2 me-1 mt-5 text-white text-uppercase">Testimonials</span> Our Clients Say ! </h1>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;