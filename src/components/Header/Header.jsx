import { NavLink } from 'react-router-dom';
import './header.css'
import { Dropdown } from 'react-bootstrap';


const Header = () => {
    return (
        <>
            <div className="container-fluid bg-danger">
                <div className=" nav-container pt-3 ">
                    <nav className='d-flex align-items-center justify-content-around'>
                        <a className='navbar-brand' href="">
                            <h1>SEOcom</h1>
                        </a>
                        <div className='d-flex align-items-center   ' >
                            <NavLink className='ms-4  navbar-link' to="/">
                                <span>Home</span>
                            </NavLink>

                            <NavLink className='ms-4  navbar-link' to="/about">
                                <span>About</span>
                            </NavLink>

                            <Dropdown className="ms-4">
                                <Dropdown.Toggle
                                    variant="link"
                                    className=" navbar-link text-decoration-none p-0"
                                    id="service-dropdown"
                                >
                                    <span> Service</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to="/service">
                                        Services
                                    </Dropdown.Item>

                                    <Dropdown.Item as={NavLink} to="/service/details">
                                        Service Details
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="ms-4">
                                <Dropdown.Toggle
                                    variant="link"
                                    className=" navbar-link text-decoration-none p-0 nav-tag"
                                    id="project-dropdown"
                                >
                                    <span> Project</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to="/projects">
                                        Projects
                                    </Dropdown.Item>

                                    <Dropdown.Item as={NavLink} to="/project/details">
                                        Project Detail
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>


                            <Dropdown className="ms-4">
                                <Dropdown.Toggle
                                    variant="link"
                                    className=" navbar-link text-decoration-none p-0"
                                    id="page-dropdown"
                                >
                                    <span> Pages</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to="/page/faqs">
                                        FAQs
                                    </Dropdown.Item>

                                    <Dropdown.Item as={NavLink} to="/page/price">
                                        Prices
                                    </Dropdown.Item>

                                    <Dropdown.Item as={NavLink} to="/page/feature">
                                        Features
                                    </Dropdown.Item>

                                    <Dropdown.Item as={NavLink} to="/page/ourteam">
                                        Our Team
                                    </Dropdown.Item>

                                    <Dropdown.Item as={NavLink} to="/page/testinomials">
                                        Testimonials
                                    </Dropdown.Item>

                                    <Dropdown.Item as={NavLink} to="/page/errorpage">
                                        404 Page
                                    </Dropdown.Item>

                                </Dropdown.Menu>

                            </Dropdown>

                            <NavLink className='ms-4  navbar-link' to="/contact">
                                <span>Contact</span>
                            </NavLink>
                        </div>
                        <button className=' text-white px-3 py-2  bg-secondary'>
                            Get a Quote
                        </button>

                    </nav>
                </div>
            </div>

        </>
    );
};

export default Header;