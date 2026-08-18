import { useEffect } from 'react';
import './serviceDetails.css'
import initScrollReveal from '../../js/scrollReveal';
import { IoIosCheckbox } from "react-icons/io";
import serviceDetailImg from '../../assets/service-details/service-details.png'
import { BsGraphUpArrow } from 'react-icons/bs';
import Accordion from 'react-bootstrap/Accordion';
import { FaEnvelope, FaFileAlt, FaFilePdf, FaLaptop, FaMapMarkerAlt, FaMobileAlt, FaPhoneAlt, FaSearch } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaArrowPointer } from 'react-icons/fa6';
import { IoShareSocial } from 'react-icons/io5';


const ServiceDetails = () => {
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
                                Service Details
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
                                Services Details
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            {/* // service details content */}
            <div className="container my-5">
                <div className="row py-5">
                    <div className="col-12 col-lg-8 px-4">
                        <div className="d-flex flex-column">
                            <img className="img-fluid" src={serviceDetailImg} alt="img" />

                            <h1 className='my-4'>SEO Optmization</h1>
                            <p className='me-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti tempora nostrum, deserunt ipsam eius hic, explicabo quibusdam incidunt labore dolorum porro eligendi in accusantium repellendus voluptates quisquam culpa saepe?Lorem ipsum dolor sit amet, consectetur adipisicing elit. In tenetur, consequatur necessitatibus temporibus eos neque veritatis officiis perferendis ipsam, repellendus numquam sed dolorem repellat, totam voluptate doloremque nulla magni vitae facilis ut optio dolorum. Cum illo iusto totam officia vero?</p>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti tempora nostrum, deserunt ipsam eius hic, explicabo quibusdam incidunt labore dolorum porro eligendi in accusantium repellendus voluptates quisquam culpa saepe?Lorem ipsum dolor sit amet, consectetur adipisicing elit. In tenetur, consequatur necessitatibus temporibus eos neque veritatis officiis perferendis ipsam, repellendus numquam sed dolorem repellat, totam voluptate doloremque nulla magni vitae facilis ut optio dolorum. Cum illo iusto totam officia vero?</p>

                            <div className='d-flex flex-column flex-md-row gap-3 mt-4 '>
                                <div className="col-12 col-md-6 ">
                                    <img className='img-fluid' src={serviceDetailImg} alt="ss" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="d-flex flex-column py-4">
                                        <div className="d-flex align-items-center border-bottom pb-2 ">
                                            <IoIosCheckbox className='text-white bg-danger' />
                                            <p className='ms-4 fw-bold'>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="d-flex align-items-center border-bottom py-2 ">
                                            <IoIosCheckbox className='text-white bg-danger' />
                                            <p className='ms-4 fw-bold'>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="d-flex align-items-center border-bottom py-2 ">
                                            <IoIosCheckbox className='text-white bg-danger' />
                                            <p className='ms-4 fw-bold'>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="d-flex align-items-center border-bottom py-2 ">
                                            <IoIosCheckbox className='text-white bg-danger' />
                                            <p className='ms-4 fw-bold'>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="d-flex align-items-center border-bottom py-2 ">
                                            <IoIosCheckbox className='text-white bg-danger' />
                                            <p className='ms-4 fw-bold'>Lorem ipsum dolor sit amet.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <h1 className='py-3'>
                                Why choose us!

                            </h1>

                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, animi! Quia est quos distinctio excepturi commodi illo suscipit explicabo tempora!
                            </p>

                            <div className='row mt-3 '>
                                <div className='d-flex align-items-center border-bottom  pb-3'>
                                    <div className="col-1">
                                        <BsGraphUpArrow className='bg-danger text-white p-3 display-5  rounded-1 fw-bold feature-icon ' />
                                    </div>
                                    <div className="col-11">
                                        <div className="d-flex flex-column">
                                            <h5>Proven Result</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, voluptates!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center border-bottom  py-3'>
                                    <div className="col-1">
                                        <BsGraphUpArrow className='bg-danger text-white p-3 display-5  rounded-1 fw-bold feature-icon ' />
                                    </div>
                                    <div className="col-11">
                                        <div className="d-flex flex-column">
                                            <h5>Proven Result</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, voluptates!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center py-3'>
                                    <div className="col-1">
                                        <BsGraphUpArrow className='bg-danger text-white p-3 display-5  rounded-1 fw-bold feature-icon ' />
                                    </div>
                                    <div className="col-11">
                                        <div className="d-flex flex-column">
                                            <h5>Proven Result</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, voluptates!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h1 className='mt-4'>Have You Any Questions ? </h1>
                            <div className='accordin-div'>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className='txt-grey accordion-btn'>1.  What is Seo ? </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className='txt-grey accordion-btn'>2.  How long does SEO take?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header className='txt-grey accordion-btn'>3.  How long does SEO take?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header className='txt-grey accordion-btn'>4.  How long does SEO take?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header className='txt-grey accordion-btn'>5.  How long does SEO take?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                            </div>


                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className='position-relative'>
                            <input className='form-control p-3 service-input' type="text" placeholder='Search...' />
                            <FaSearch className='position-absolute top-0 fs-3 end-0 mt-3 text-danger me-3' />
                        </div>
                        <div>
                            <h2 className='mt-5 mb-2'>Our Services</h2>

                            <div className="bg-grey rounded px-3 py-2 d-flex align-items-center our-service-type">
                                <BsGraphUpArrow className="me-3 our-service-type-icon " />
                                <span className="fs-6 ">SEO Optimization</span>
                            </div>

                            <div className="bg-grey rounded px-3 py-2 d-flex align-items-center mt-3 our-service-type">
                                <FaLaptop className="me-3 our-service-type-icon " />
                                <span className="fs-6 ">Web Design</span>
                            </div>

                            <div className="bg-grey rounded px-3 py-2 d-flex align-items-center mt-3 our-service-type">
                                <IoShareSocial className="me-3 our-service-type-icon " />
                                <span className="fs-6 ">Social Marketing</span>
                            </div>

                            <div className="bg-grey rounded px-3 py-2 d-flex align-items-center mt-3 our-service-type">
                                <MdEmail className="me-3 our-service-type-icon " />
                                <span className="fs-6 ">Email Marketing</span>
                            </div>

                            <div className="bg-grey rounded px-3 py-2 d-flex align-items-center mt-3 our-service-type">
                                <FaArrowPointer
                                    className="me-3 our-service-type-icon " />
                                <span className="fs-6 ">PPC Advertising</span>
                            </div>

                            <div className="bg-grey rounded px-3 py-2 d-flex align-items-center mt-3 our-service-type">
                                <FaMobileAlt className="me-3 our-service-type-icon " />
                                <span className="fs-6 ">App Development</span>
                            </div>
                        </div>

                        {/* Broucher */}
                        <div className='mt-5'>
                            <h1>Brouchers</h1>
                            <div className="bg-light p-3 rounded mb-3 cursor-pointer">
                                <div className="d-flex align-items-center bg-white">
                                    <div className="bg-danger text-white p-2">
                                        <FaFilePdf className="fs-4" />
                                    </div>

                                    <span className=" txt-grey ms-3">
                                        DOWNLOAD.PDF
                                    </span>
                                </div>
                            </div>

                            <div className="bg-light p-3 rounded mb-3 cursor-pointer">
                                <div className="d-flex align-items-center bg-white">
                                    <div className="bg-danger text-white p-2">
                                        <FaFileAlt className="fs-4" />
                                    </div>

                                    <span className=" txt-grey ms-3">
                                        DOWNLOAD.TXT
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* need help */}
                        <div className='mt-5'>
                            <h1>Need Any Help</h1>
                            <div className="bg-light rounded p-3 mb-3 d-flex align-items-center">
                                <div className="bg-danger text-white p-2">
                                    <FaEnvelope className="fs-4" />
                                </div>

                                <div className="ms-3">
                                    <h5 className="fw-bold mb-1 fs-6">Email Address</h5>
                                    <span className="txt-grey fs-6">info@example.com</span>
                                </div>
                            </div>

                            <div className="bg-light rounded p-3 mb-3 d-flex align-items-center">
                                <div className="bg-danger text-white p-2">
                                    <FaPhoneAlt className="fs-4" />
                                </div>

                                <div className="ms-3">
                                    <h5 className="fw-bold mb-1 fs-6">Phone Number</h5>
                                    <span className="txt-grey fs-6">+012 345 67890</span>
                                </div>
                            </div>

                            <div className="bg-light rounded p-3 mb-3 d-flex align-items-center">
                                <div className="bg-danger text-white p-2">
                                    <FaMapMarkerAlt className="fs-4" />
                                </div>

                                <div className="ms-3">
                                    <h5 className="fw-bold mb-1 fs-6">Location</h5>
                                    <span className="txt-grey fs-6">
                                        123 Street, New York, USA
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
};

export default ServiceDetails;