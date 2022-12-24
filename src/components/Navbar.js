import React from 'react';
import logo from '../images/logo.PNG';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
            <Link smooth={true} to="home" className="navbar-brand"><img className="logo" src={logo} alt="logo..." /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon className="hamburger-menu" icon={faBars}/>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" className="nav-link">Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-110} className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" offset={-110} className="nav-link">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" offset={0} className="nav-link" >Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="home" className="nav-link">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar