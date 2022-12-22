import React from 'react';
import author from '../images/me.PNG';

const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corporis officia eligendi quibusdam sint, porro voluptatibus pariatur, architecto recusandae, provident tempora repellendus dolor dolores. Voluptatum ab assumenda deleniti ipsa veniam ullam qui itaque labore magnam incidunt necessitatibus quas tempore architecto reiciendis excepturi cum illo consequuntur dolorum temporibus, sequi a soluta.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About