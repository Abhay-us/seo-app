import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import { Dropdown } from "react-bootstrap";


const HoverDropdown = ({ title, children, className = "" }) => {

    const [open, setOpen] = useState(false);

    return (
        <Dropdown
            className={className}
            show={open}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >

            <Dropdown.Toggle
                variant="link"
                className="navbar-link text-decoration-none p-0"
            >
                <span>{title}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {children}
            </Dropdown.Menu>

        </Dropdown>
    );
};


const Header = () => {

    return (
        <>
            <div className="container-fluid bg-danger">
                <div className="nav-container pt-3">

                    <nav className="d-flex flex-column flex-md-row align-items-center justify-content-around gap-3 gap-md-0 pb-3 pb-md-0">

                        {/* Logo */}
                        <NavLink className="navbar-brand" to="/">
                            <h1>SEOcom</h1>
                        </NavLink>


                        {/* Navigation */}
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 gap-md-0">

                            {/* Home */}
                            <NavLink
                                className="ms-md-4 navbar-link"
                                to="/"
                            >
                                <span>Home</span>
                            </NavLink>


                            {/* About */}
                            <NavLink
                                className="ms-md-4 navbar-link"
                                to="/about"
                            >
                                <span>About</span>
                            </NavLink>


                            {/* Service */}
                            <HoverDropdown
                                title="Service"
                                className="ms-md-4"
                            >

                                <Dropdown.Item
                                    as={NavLink}
                                    to="/service"
                                >
                                    Services
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={NavLink}
                                    to="/service/details"
                                >
                                    Service Details
                                </Dropdown.Item>

                            </HoverDropdown>


                            {/* Project */}
                            <HoverDropdown
                                title="Project"
                                className="ms-md-4"
                            >

                                <Dropdown.Item
                                    as={NavLink}
                                    to="/projects"
                                >
                                    Projects
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={NavLink}
                                    to="/project/details"
                                >
                                    Project Detail
                                </Dropdown.Item>

                            </HoverDropdown>


                            {/* Pages */}
                            <HoverDropdown
                                title="Pages"
                                className="ms-md-4"
                            >

                                <Dropdown.Item
                                    as={NavLink}
                                    to="/page/faqs"
                                >
                                    FAQs
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={NavLink}
                                    to="/page/price"
                                >
                                    Prices
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={NavLink}
                                    to="/page/feature"
                                >
                                    Features
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={NavLink}
                                    to="/page/ourteam"
                                >
                                    Our Team
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={NavLink}
                                    to="/page/testinomials"
                                >
                                    Testimonials
                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={NavLink}
                                    to="/page/errorpage"
                                >
                                    404 Page
                                </Dropdown.Item>

                            </HoverDropdown>


                            {/* Contact */}
                            <NavLink
                                className="ms-md-4 navbar-link"
                                to="/contact"
                            >
                                <span>Contact</span>
                            </NavLink>

                        </div>


                        {/* Quote Button */}
                        <NavLink to="/contact" className="text-white px-3 py-2 bg-secondary text-decoration-none">
                            Get a Quote
                        </NavLink>

                    </nav>

                </div>

            </div>

        </>
    );
};

export default Header;
