import { useEffect } from 'react';
import initScrollReveal from '../../js/scrollReveal';
import { BsGraphUpArrow } from 'react-icons/bs';

const Features = () => {

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
                                Features
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
                                Features
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container py-5 my-5">
                <div className="text-center">
                    <h1>
                        <span className="bg-danger text-white me-3 px-2 py-1">
                            FEATURES
                        </span>
                        Why People Choose Us!
                    </h1>
                </div>
                <div className="row mt-5 px-2 px-md-5 g-4">
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
        </>
    );
};
export default Features;