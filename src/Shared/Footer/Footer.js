import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaYoutubeSquare } from "react-icons/fa";
import { FaBeer } from 'react-icons/fa';
const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div>
            <footer className="text-center text-lg-start bg-light text-muted">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom mx-5"
                >
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a class="me-4 text-reset" href="https://www.facebook.com/profile.php?id=100071106706650" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
                        <a class="me-4 text-reset" href="https://www.linkedin.com/in/md-imranul-haque/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a class="me-4 text-reset" href="https://github.com/Imran-2022" target="_blank" rel="noreferrer"><FaGithubSquare /></a>
                        <a class="me-4 text-reset" href="https://www.youtube.com/channel/UCF7WyIjmmYdD1l3fp4egycQ/featured" target="_blank" rel="noreferrer"><FaYoutubeSquare /></a>
                    </div>
                </section>


                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Company name
                                </h6>
                                <p>
                                <span className='bg-secondary text-light p-1 my-2'>MACHINARY</span> <br/>
                                    WELCOME TO OUR <br/>
                                    LARGEST MACHINARY<br/>
                                    WORLD LARGEST INVENTORY MANAGEMENT <br/>
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">HOME</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">READ BLOGS</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">ABOUT US</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">FEACTURED PRODUCT</a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><FaBeer /> Dhaka,Bangladesh</p>
                                <p>
                                <FaBeer /> machinary@gmail.com
                                </p>
                                <p><FaBeer /> + 01 234 567 88</p>
                                <p><FaBeer /> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © {date}, All Right Reserved by `MACHINERY
                </div>
            </footer>
        </div>
    );
};

export default Footer;