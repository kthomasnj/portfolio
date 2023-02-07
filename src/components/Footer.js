import React from 'react';
import {
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share';
import {Link} from 'react-scroll';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Stewartsville, NJ USA</p>
                        </div>
                        <div className="d-flex">
                            <p>info@keithsthomas.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" className='footer-nav'>Home</Link>
                                <br />
                                <Link smooth={true} to="about" className='footer-nav'>About</Link>
                                <br />
                                <Link smooth={true} to="contact" className='footer-nav'>Contact</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="portfolio" className='footer-nav'>Portfolio</Link>
                                <br />
                                <Link smooth={true} to="home" className='footer-nav'>Resume</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 allign-items-center">
                        <div className="d-flex justify-content-center">
                            <LinkedinShareButton
                                url={"https://www.youtube.com/8020coding"}
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright &copy;
                            {new Date().getFullYear()}&nbsp;| Keith S. Thomas | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer