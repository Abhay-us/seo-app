import { useEffect } from 'react';
import './prices.css'
import initScrollReveal from '../../js/scrollReveal';
import {
    FaStar,
    FaGem,
    FaCrown,
    FaCheck,
    FaTimes
} from "react-icons/fa";

const Prices = () => {
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
                                Prices
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
                                Prices
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="d-flex flex-column py-5 justify-content-center">
                    <h1 className=" text-center">
                        <span className="bg-danger ms-2 px-2 py-1 text-white text-uppercase">Pricing Plan</span> For Our Service </h1>

                    <div className="row mt-4 g-4">

                        {/* Standard */}
                        <div className="col-12 col-md-6 col-lg-4 price-div">
                            <div className="bg-white shadow-sm p-4 h-100">

                                <FaStar className="text-primary fs-1 mb-3" />

                                <h3 className="text-primary fw-bold">
                                    Standard
                                </h3>

                                <div className="d-flex align-items-end mb-4">
                                    <span className="fs-5 fw-bold">$</span>
                                    <span className="display-5 fw-bold text-primary">
                                        29.99
                                    </span>
                                    <span className="txt-grey ms-1 mb-2">
                                        /Month
                                    </span>
                                </div>

                                <div className="border rounded p-3">

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">HTML5 & CSS3</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">Bootstrap v5</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">Responsive Layout</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">Cross-browser Support</span>
                                        <FaTimes className="text-danger" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">Remove Author's Credit</span>
                                        <FaTimes className="text-danger" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">PHP & Ajax Contact Form</span>
                                        <FaTimes className="text-danger" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2">
                                        <span className="txt-grey">6 Months Free Support</span>
                                        <FaTimes className="text-danger" />
                                    </div>

                                </div>

                                <button className="btn btn-primary rounded-0 mt-4 px-4 py-2">
                                    Get Started
                                </button>

                            </div>
                        </div>


                        {/* Professional */}
                        <div className="col-12 col-md-6 col-lg-4 price-div">
                            <div className="bg-white shadow-sm p-4 h-100">

                                <FaGem className="text-danger fs-1 mb-3" />

                                <h3 className="text-danger fw-bold">
                                    Professional
                                </h3>

                                <div className="d-flex align-items-end mb-4">
                                    <span className="fs-5 fw-bold">$</span>
                                    <span className="display-5 fw-bold text-danger">
                                        49.99
                                    </span>
                                    <span className="txt-grey ms-1 mb-2">
                                        /Month
                                    </span>
                                </div>

                                <div className="border rounded p-3">

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">HTML5 & CSS3</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">Bootstrap v5</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">Responsive Layout</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">Cross-browser Support</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">Remove Author's Credit</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">PHP & Ajax Contact Form</span>
                                        <FaTimes className="text-danger" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2">
                                        <span className="txt-grey">6 Months Free Support</span>
                                        <FaTimes className="text-danger" />
                                    </div>

                                </div>

                                <button className="btn btn-danger rounded-0 mt-4 px-4 py-2">
                                    Get Started
                                </button>

                            </div>
                        </div>


                        {/* Ultimate */}
                        <div className="col-12 col-md-6 col-lg-4 price-div">
                            <div className="bg-white shadow-sm p-4 h-100">

                                <FaCrown className="text-primary fs-1 mb-3" />

                                <h3 className="text-primary fw-bold">
                                    Ultimate
                                </h3>

                                <div className="d-flex align-items-end mb-4">
                                    <span className="fs-5 fw-bold">$</span>
                                    <span className="display-5 fw-bold text-primary">
                                        79.99
                                    </span>
                                    <span className="txt-grey ms-1 mb-2">
                                        /Month
                                    </span>
                                </div>

                                <div className="border rounded p-3">

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">HTML5 & CSS3</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">Bootstrap v5</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">Responsive Layout</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">Cross-browser Support</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">Remove Author's Credit</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2 border-bottom">
                                        <span className="txt-grey">PHP & Ajax Contact Form</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                    <div className="d-flex justify-content-between py-2">
                                        <span className="txt-grey">6 Months Free Support</span>
                                        <FaCheck className="text-success" />
                                    </div>

                                </div>

                                <button className="btn btn-primary rounded-0 mt-4 px-4 py-2">
                                    Get Started
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
export default Prices;