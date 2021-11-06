import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <Container>
        <h2>Contact</h2>
        <p className="lead subtitle text-secondary mb-5">
          I'm baby activated charcoal yr occupy synth retro kitsch portland.
        </p>
        <Row className="erste_reihe pb-4">
          <Col md={5}>
            <h3 className="text-indigo-300">Get in touch</h3>
          </Col>
          <Col md={3}>
            <h4 className="mt-4 mt-md-0">Collaborate</h4>
            <p className="lead text-secondary mb-2">mupro@example.com</p>
            <p className="lead text-secondary mb-2">010-1234-5678</p>
          </Col>
          <Col md={3}>
            <h4 className="mt-4 mt-md-0">Press</h4>
            <p className="lead text-secondary mb-2">mupro@example.com</p>
            <p className="lead text-secondary mb-2">010-1234-5678</p>
          </Col>
          <Col md={5}></Col>
          <Col md={3}>
            <h4 className="mt-4 mt-md-0">Join our team</h4>
            <p className="lead text-secondary mb-2">mupro@example.com</p>
            <p className="lead text-secondary mb-2">010-1234-5678</p>
          </Col>
          <Col md={3}>
            <h4 className="mt-4 mt-md-0">Say hello</h4>
            <p className="lead text-secondary mb-2">mupro@example.com</p>
            <p className="lead text-secondary mb-2">010-1234-5678</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={5}>
            <h3 className="text-indigo-300">Location</h3>
          </Col>
          <Col md={3}>
            <h4 className="mt-4 mt-md-0">Berlin</h4>
            <p className="lead text-secondary mb-2">12345 Berlin</p>
            <p className="lead text-secondary mb-2">Berliner Straße 5</p>
          </Col>
          <Col md={3}>
            <h4 className="mt-4 mt-md-0">München</h4>
            <p className="lead text-secondary mb-2">12345 München</p>
            <p className="lead text-secondary mb-2">Münchener Straße 5</p>
          </Col>
          <Col md={5}></Col>
          <Col md={3}>
            <h4 className="mt-4 mt-md-0">Stuttgart</h4>
            <p className="lead text-secondary mb-2">12345 Stuttgart</p>
            <p className="lead text-secondary mb-2">Stuttgarter Straße 5</p>
          </Col>
          <Col md={3}>
            <h4 className="mt-4 mt-md-0">Frankfurt</h4>
            <p className="lead text-secondary mb-2">12345 Frankfurt</p>
            <p className="lead text-secondary mb-2">Frankfurter Straße 5</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
