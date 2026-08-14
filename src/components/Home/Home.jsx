import './home.css'
import heroimg from '../../assets/hero/hero-header.png'
import aboutimg from '../../assets/hero/about.png'
import { FaCheck, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaTrophy, FaStar } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbCoffee } from "react-icons/tb";


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
                            <a className='bg-secondary btn-square'><FaFacebookF className=' fs-6   text-white' /></a>
                            <a className='bg-secondary btn-square'><FaTwitter className=' fs-6    text-white' /></a>
                            <a className='bg-secondary btn-square'><FaInstagram className=' fs-6    text-white' /></a>
                            <a className='bg-secondary btn-square'><FaLinkedin className=' fs-6    text-white' /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* /about end  */}

            {/* feature starts */}
            <div className="container-fluid bg-danger mt-5">
                <div className="container py-5">
                    <div className="row  py-5">
                        <div className="col-3">
                            <div className="d-flex align-items-center   ">
                                <div className='btn-square bg-secondary'>
                                    <FaTrophy className='text-white  fs-5 ' />
                                </div>
                                <p className='text-white ms-3 m-0
                                 fs-5'>Award  Winning</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="d-flex align-items-center   ">
                                <div className='btn-square bg-secondary'>
                                    <FaPeopleGroup className='text-white  fs-5 ' />
                                </div>
                                <p className='text-white ms-3 m-0
                                 fs-5'>Professional Staff</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="d-flex align-items-center   ">
                                <div className='btn-square bg-secondary'>
                                    <MdOutlineSupportAgent className='text-white  fs-5 ' />
                                </div>
                                <p className='text-white ms-3 m-0
                                 fs-5'>24/7 Support</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="d-flex align-items-center   ">
                                <div className='btn-square bg-secondary'>
                                    <BsCash className='text-white  fs-5 ' />
                                </div>
                                <p className='text-white ms-3 m-0
                                 fs-5'>Fair Prices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* feature end */}
            {/* feature info start */}
            <div className="container pt-5 mt-5">
                <div className='text-center'>
                    <h1>
                        <span className='bg-danger text-white me-3 px-2 py-1'>FEATURES</span>
                        Why People Choose Us!
                    </h1>
                </div>
                <div className="row mt-5 ">
                    <div className='d-flex gap-5 '>
                        <div className="col  text-center">
                            <p><BsGraphUpArrow className='display-4   text-danger feature-icon' /></p>
                            <h4 className='mt-4 mb-2 fw-bold'>Provern Results</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                        </div>
                        <div className="col  text-center">
                            <p><BsGraphUpArrow className='display-4   text-danger feature-icon' /></p>
                            <h4 className='mt-4 mb-2 fw-bold'>Provern Results</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                        </div>
                        <div className="col  text-center">
                            <p><BsGraphUpArrow className='display-4   text-danger feature-icon' /></p>
                            <h4 className='mt-4 mb-2 fw-bold'>Provern Results</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                        </div>
                    </div>
                    <div className='d-flex gap-5 mt-4 '>
                        <div className="col  text-center">
                            <p><BsGraphUpArrow className='display-4   text-danger feature-icon' /></p>
                            <h4 className='mt-4 mb-2 fw-bold'>Provern Results</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                        </div>
                        <div className="col  text-center">
                            <p><BsGraphUpArrow className='display-4   text-danger feature-icon' /></p>
                            <h4 className='mt-4 mb-2 fw-bold'>Provern Results</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                        </div>
                        <div className="col  text-center">
                            <p><BsGraphUpArrow className='display-4   text-danger feature-icon' /></p>
                            <h4 className='mt-4 mb-2 fw-bold'>Provern Results</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* feature-2 end */}

            {/* service start */}
            <div className="container-fluid bg-danger mt-5">
                <div className="container py-5">
                    <div className="row  py-5">
                        <div className="col-3">
                            <div className="d-flex    ">
                                <div className='btn-square bg-secondary'>
                                    <FaStar className='text-white  fs-5 ' />
                                </div>
                                <div className='d-flex flex-column ms-3 btn-square'>
                                    <p className='text-white 
                                 fs-6'>Years </p>
                                    <p className='text-white 
                                 fs-4 fw-bolder'>1234</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-3">
                            <div className="d-flex align-items-center   ">
                                <div className='btn-square bg-secondary'>
                                    <FaPeopleGroup className='text-white  fs-5 ' />
                                </div>
                                <div className='d-flex flex-column ms-3 btn-square'>
                                    <p className='text-white 
                                 fs-6'>Clients </p>
                                    <p className='text-white 
                                 fs-4 fw-bolder'>1234</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="d-flex align-items-center   ">
                                <div className='btn-square bg-secondary'>
                                    <FaTrophy className='text-white  fs-5 ' />
                                </div>
                                <div className='d-flex flex-column ms-3 btn-square'>
                                    <p className='text-white 
                                 fs-6'>Awards </p>
                                    <p className='text-white 
                                 fs-4 fw-bolder'>1234</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="d-flex align-items-center   ">
                                <div className='btn-square bg-secondary'>
                                    <TbCoffee className='text-white  fs-5 ' />
                                </div>
                                <div className='d-flex flex-column ms-3 btn-square'>
                                    <p className='text-white 
                                 fs-6'>Events </p>
                                    <p className='text-white 
                                 fs-4 fw-bolder'>1234</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /service -content */}
            <div className="container pt-5 mt-5">
                <div className='text-center'>
                    <h1>
                        <span className='bg-danger text-white me-3 px-2 py-1'>Services</span>
                        Why People Choose Us!
                    </h1>
                </div>
                <div className="row mt-5 ">
                    <div className='d-flex gap-5 '>
                        <div className="col  text-center">
                            <p><BsGraphUpArrow className='display-4   text-danger feature-icon' /></p>
                            <h4 className='mt-4 mb-2 fw-bold'>Provern Results</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                        </div>
                        <div className="col  text-center">
                            <p><BsGraphUpArrow className='display-4   text-danger feature-icon' /></p>
                            <h4 className='mt-4 mb-2 fw-bold'>Provern Results</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                        </div>
                        <div className="col  text-center">
                            <p><BsGraphUpArrow className='display-4   text-danger feature-icon' /></p>
                            <h4 className='mt-4 mb-2 fw-bold'>Provern Results</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                        </div>
                    </div>
                    <div className='d-flex gap-5 mt-4 '>
                        <div className="col  text-center">
                            <p><BsGraphUpArrow className='display-4   text-danger feature-icon' /></p>
                            <h4 className='mt-4 mb-2 fw-bold'>Provern Results</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                        </div>
                        <div className="col  text-center">
                            <p><BsGraphUpArrow className='display-4   text-danger feature-icon' /></p>
                            <h4 className='mt-4 mb-2 fw-bold'>Provern Results</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                        </div>
                        <div className="col  text-center">
                            <p><BsGraphUpArrow className='display-4   text-danger feature-icon' /></p>
                            <h4 className='mt-4 mb-2 fw-bold'>Provern Results</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quaerat?Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;