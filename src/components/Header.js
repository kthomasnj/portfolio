import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {Link} from 'react-scroll';

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>web development and website promotions</h1>
                <TypeAnimation
                    className="typed-text"
                    sequence={[
                        'Web Design',
                        2000, 
                        'Web Development', 
                        2000, 
                        'Facebook Ads', 
                        2000,
                        "Google Ads",
                        2000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '2em' }}
                />
                <Link smooth={true} to="contact" className="btn-main-offer">Contact Me</Link>
                <h3><a className="image-att" href="https://www.freepik.com/free-photo/workplace-with-smartphone-laptop-black-table-top-view-copyspace-background_7760405.htm#page=3&query=laptop%20coffee&position=32&from_view=search&track=sph">Image by Racool_studio</a> on Freepik</h3>
            </div>
        </div>
    )
}

export default Header