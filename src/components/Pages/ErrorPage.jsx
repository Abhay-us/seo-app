import { useEffect } from 'react';
import './errorPage.css'
import initScrollReveal from '../../js/scrollReveal';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {

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
                                404 Error
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
                                404 Error
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-8">

                        <FaExclamationTriangle className="text-danger display-4 mb-3" />

                        <h1 className="display-1 fw-bold mb-2">
                            404
                        </h1>

                        <h2 className="fw-bold mb-4">
                            Page Not Found
                        </h2>

                        <p className="txt-grey px-5 mx-5 fs-6 mb-4">
                            We’re sorry, the page you have looked for does not
                            exist in our website! Maybe go to our home page or try
                            to use a search?
                        </p>

                        <button className="btn btn-danger px-4 py-3">
                            Go Back To Home
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};
export default ErrorPage;