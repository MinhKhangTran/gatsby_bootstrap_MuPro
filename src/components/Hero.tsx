import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="hero">
      <StaticImage
        className="hero_img"
        src="../images/hero.png"
        alt="hero_img"
        layout="fullWidth"
        placeholder="tracedSVG"
      />
      <Container className="hero_text_wrapper">
        <article className="text-white">
          <h1>Let's make some fresh beats</h1>
          <p className="lead">We are your local music producer</p>
          <Button size="lg">Book Us</Button>
        </article>
      </Container>
    </section>
  );
};

export default Hero;
