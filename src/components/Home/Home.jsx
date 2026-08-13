import './home.css'
import heroimg from '../../assets/hero/hero-header.png'
import aboutimg from '../../assets/hero/about.png'
import { FaCheck, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
    return (
        <>
            {/* hero start */}
            <div className="container-fluid bg-danger pt-5 ">
                <div className="container pt-5 ">
                    <div className="row py-5">
                        <div className="col-6 ">
                            <h1 className='display-4 fw-bold hero-content'>All in One
                                <span class="text-white ms-3">SEO TOOL</span>
                            </h1>
                            <h1 className='display-4 fw-bold'>
                                Need to Grow Your Business Rapidly
                            </h1>
                            <p className='mt-3 d-inline-block rounded text-white fs-5 p-3 hero-p '>
                                An Award Winning Agency Since 1990
                            </p>

                        </div>
                        <div className="col-6">
                            <img className='img-fluid' src={heroimg} alt="img" />
                        </div>
                    </div>

                </div>
            </div>

            {/* about start */}

            <div className='container mt-5'>
                <div className="row pt-4">

                    <div className="col-6">
                        <img className='img-fluid' src={aboutimg} alt="img" />
                    </div>

                    <div className="col-6 mt-5 ">
                        <h1 className=''>
                            <span className='bg-danger text-white px-2 py-1 me-2'>ABOUT</span>
                            The Best SEO Solution With 10 Years of Experience
                        </h1>
                        <p className='mt-4'>
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet
                        </p>
                        <p className='my-4'>Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor.</p>
                        <div className='row'>
                            <div className="col-6 ">
                                <h6>
                                    <FaCheck className='text-danger me-3' />
                                    Award Winning
                                </h6>
                                <h6>
                                    <FaCheck className='text-danger me-3' />
                                    Professional Staff
                                </h6>
                            </div>
                            <div className="col-6">
                                <h6>
                                    <FaCheck className='text-danger me-3' />
                                    24/7 Support
                                </h6>
                                <h6>
                                    <FaCheck className='text-danger me-3' />
                                    Fair Prices
                                </h6>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-3 mt-3'>
                            <a className='text-white bg-danger p-4 py-3 '>Read More</a>
                            <a className='btn-secondary py-2 px-3'><FaFacebookF className=' fs-5      text-white' /></a>
                            <a className='btn-secondary py-2 px-3'><FaTwitter className=' fs-5      text-white' /></a>
                            <a className='btn-secondary py-2 px-3'><FaInstagram className=' fs-5      text-white' /></a>
                            <a className='btn-secondary py-2 px-3'><FaLinkedin className=' fs-5      text-white' /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* /about end  */}

            {/* feature starts */}
            <div className="container-fluid bg-danger mt-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-6"></div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default Home;