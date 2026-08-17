import { useEffect } from 'react';
import './projectDetails.css'
import initScrollReveal from '../../js/scrollReveal';
import { IoIosCheckbox } from "react-icons/io";
import serviceDetailImg from '../../assets/service-details/service-details.png'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaSearch } from 'react-icons/fa';


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
            <div className="container-fluid bg-danger about-banner">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">

                        <div className="col-12 col-md-6 reveal-left">
                            <h1 className="display-3 fw-bold text-secondary mb-0">
                                Project Details
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
                                Project Details
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            {/* // service details content */}
            <div className="container my-5">
                <div className="row py-5">
                    <div className="col-8 px-4">
                        <div className="d-flex flex-column">
                            <img src={serviceDetailImg} alt="img" />

                            <h1 className='my-4'>Project Highlights</h1>
                            <p className='me-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti tempora nostrum, deserunt ipsam eius hic, explicabo quibusdam incidunt labore dolorum porro eligendi in accusantium repellendus voluptates quisquam culpa saepe?Lorem ipsum dolor sit amet, consectetur adipisicing elit. In tenetur, consequatur necessitatibus temporibus eos neque veritatis officiis perferendis ipsam, repellendus numquam sed dolorem repellat, totam voluptate doloremque nulla magni vitae facilis ut optio dolorum. Cum illo iusto totam officia vero?</p>
                            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti tempora nostrum, deserunt ipsam eius hic, explicabo quibusdam incidunt labore dolorum porro eligendi in accusantium repellendus voluptates quisquam culpa saepe?Lorem ipsum dolor sit amet, consectetur adipisicing elit. In tenetur, consequatur necessitatibus temporibus eos neque veritatis officiis perferendis ipsam, repellendus numquam sed dolorem repellat, totam voluptate doloremque nulla magni vitae facilis ut optio dolorum. Cum illo iusto totam officia vero?</p>

                            <div className='d-flex gap-3 mt-4 '>
                                <div className="col ">
                                    <img className='img-fluid' src={serviceDetailImg} alt="ss" />
                                </div>

                                <div className="col">
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

                            <div className='mt-4'>
                                <h1>Project Gallery</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, similique Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, expedita..
                                </p>
                                <div className='row mt-4 g-3'>
                                    <div className="col">
                                        <img className='img-fluid' src={serviceDetailImg} alt="" />
                                    </div>
                                    <div className="col">
                                        <img className='img-fluid' src={serviceDetailImg} alt="" />
                                    </div>

                                    <div className="col">
                                        <img className='img-fluid' src={serviceDetailImg} alt="" />
                                    </div>

                                    <div className="col">
                                        <img className='img-fluid' src={serviceDetailImg} alt="" />
                                    </div>



                                </div>
                            </div>






                        </div>
                    </div>

                    <div className="col-4">
                        <div className='position-relative'>
                            <input className='form-control p-3 service-input' type="text" placeholder='Search...' />
                            <FaSearch className='position-absolute top-0 fs-3 end-0 mt-3 text-danger me-3' />
                        </div>
                        <div>
                            <h2 className='mt-5 mb-2'>Project Details</h2>

                            <div className="bg-light rounded p-3 mb-3 d-flex align-items-center">
                                <div className="bg-danger text-white p-2">
                                    <FaEnvelope className="fs-4" />
                                </div>

                                <div className="ms-3">
                                    <h5 className="fw-bold mb-1 fs-6">Project Date</h5>
                                    <span className="txt-grey fs-6">01 Jan , 2045</span>
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



                        {/* need help */}
                        <div className='mt-5'>
                            <h2>Get In Touch</h2>
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