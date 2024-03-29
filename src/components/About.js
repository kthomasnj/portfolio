import React from 'react';
import author from '../images/me.PNG';

const About = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about</h1>
          <p>
            I am Keith Thomas a recent graduate of the Rutgers University full-stack development bootcamp. I am currently working as a System Administrator exploring opportunities in web development. I have a proven ability to learn quickly and I love to create websites that store and deliver information. I am a creative problem solver, team player, and dedicated to a life-long persute of learning.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About