import { useEffect, useState } from 'react';
import './contact.css'
import initScrollReveal from '../../js/scrollReveal';

const Contact = () => {
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const sr = initScrollReveal();
        return () => {
            if (sr && typeof sr.destroy === "function") {
                sr.destroy();
            }
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!event.currentTarget.checkValidity()) {
            event.currentTarget.reportValidity();
            return;
        }

        setStatus("Thanks — your message is ready to be sent. Connect this form to your email or API service to receive submissions.");
        event.currentTarget.reset();
    };

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
                <form className="w-50 mt-5 mx-auto" onSubmit={handleSubmit} noValidate>
                    <div className="row g-3">

                        <div className="col-md-6">
                            <input
                                type="text"
                                name="name"
                                className="form-control p-3"
                                placeholder="Your Name"
                                autoComplete="name"
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                type="email"
                                name="email"
                                className="form-control p-3"
                                placeholder="Your Email"
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                type="tel"
                                name="phone"
                                className="form-control p-3"
                                placeholder="Mobile"
                                autoComplete="tel"
                            />
                        </div>

                        <div className="col-md-6">
                            <input
                                type="text"
                                name="subject"
                                className="form-control p-3"
                                placeholder="Subject"
                                required
                            />
                        </div>

                        <div className="col-12">
                            <textarea
                                className="form-control p-3"
                                name="message"
                                rows="7"
                                placeholder="Leave a message here"
                                required
                            ></textarea>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-danger w-100 py-4">
                                Send Message
                            </button>
                        </div>
                    </div>
                    {status && <p className="text-success mt-3 mb-0" role="status">{status}</p>}
                </form>
            </div>
        </>
    );
};
export default Contact;
