import React from "react";
import hero from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            sunt sint accusantium libero eveniet dolorem. Magnam incidunt cumque
            animi aperiam nobis molestiae ducimus assumenda accusantium dolore,
            natus commodi explicabo quisquam! Eaque minima in magnam eligendi
            nulla, quod facilis natus debitis.
          </p>
        </div>
        <div className="img-container">
          <img src={hero} alt="woman and browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
