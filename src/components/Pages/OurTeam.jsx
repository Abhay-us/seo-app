import { useEffect } from 'react';
import './ourTeam.css'
import initScrollReveal from '../../js/scrollReveal';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import post01 from '../../assets/hero/team/post-01.png'
import post02 from '../../assets/hero/team/post-02.png'
import post03 from '../../assets/hero/team/post-03.png'
import post04 from '../../assets/hero/team/post-04.png'

const OurTeam = () => {
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
                                Our Team
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
                                Our Team
                            </span>
                        </div>

                    </div>
                </div>
            </div>

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
                                <a className="btn bg-secondary text-white"><FaFacebook /></a>
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
                                <a className="btn bg-secondary text-white"><FaFacebook /></a>
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
                                <a className="btn bg-secondary text-white"><FaFacebook /></a>
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
                                <a className="btn bg-secondary text-white"><FaFacebook /></a>
                                <a className="btn bg-secondary text-white"><FaTwitter /></a>
                                <a className="btn bg-secondary text-white"><FaInstagram /></a>
                                <a className="btn bg-secondary text-white"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OurTeam;