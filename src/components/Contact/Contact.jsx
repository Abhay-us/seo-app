import { useEffect } from 'react';
import './contact.css'
import initScrollReveal from '../../js/scrollReveal';

const Contact = () => {
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
                                Contact
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
                                Contact
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container text-center my-5">
                <h1><span className='bg-danger text-white px-2 me-2 py-1'> Contact </span> Have Any Query</h1>
                <div className=" w-md-75 w-50 w-sm-100 mt-5 mx-auto">
                    <div className="row g-3">

                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control p-3"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                type="email"
                                className="form-control p-3"
                                placeholder="Your Email"
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control p-3"
                                placeholder="Mobile"
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control p-3"
                                placeholder="Subject"
                            />
                        </div>

                        <div className="col-12">
                            <textarea
                                className="form-control p-3"
                                rows="7"
                                placeholder="Leave a message here"
                            ></textarea>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-danger w-100 py-4">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;