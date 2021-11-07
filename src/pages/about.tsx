import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useMediaQuery } from "../helper/useMediaQuery";

const AboutPage = () => {
  let isPageWide = useMediaQuery("(min-width: 992px)");
  if (isPageWide) {
    return (
      <Layout path>
        <SEO title="about" />

        <Container>
          <Row className="">
            <Col lg={6}>
              <h1 className="text-indigo-500 mt-4">Dj MuPro</h1>
              <p className="text-indigo-400">CEO, MuPro</p>
              <p className="lead text-secondary">
                I'm baby jianbing shaman readymade ugh next level enamel pin,
                flexitarian cronut master cleanse. Chicharrones cliche vaporware
                3 wolf moon asymmetrical knausgaard plaid actually seitan
                portland meditation skateboard migas mlkshk selvage. Irony raw
                denim ennui, chillwave shabby chic skateboard lyft venmo
                waistcoat knausgaard vape glossier pop-up roof party listicle.
                Edison bulb hell of squid enamel pin palo santo.
              </p>
              <p className="lead text-secondary">
                Blog vaporware tote bag meditation 90's lumbersexual echo park
                pour-over air plant small batch authentic iceland distillery
                everyday carry literally.
              </p>
              <h2 className="">Contacts</h2>
              <p className="text-indigo-400">Mupro@example.com</p>
              <h2 className="mt-4">Follow Me</h2>
              <div className="socials  d-flex gap-3 align-items-center text-white">
                <a href="https://github.com/">
                  <FaInstagram className="social_icon" />
                  <span className="visually-hidden">Instagram</span>
                </a>
                <a href="https://github.com/">
                  <FaFacebook className="social_icon" />
                  <span className="visually-hidden">Facebook</span>
                </a>
                <a href="https://github.com/">
                  <FaTwitter className="social_icon" />
                  <span className="visually-hidden">Twitter</span>
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <StaticImage
                src="../images/about-vertical-min.png"
                alt="about me"
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
  return (
    <Layout path>
      <SEO title="about" />

      <StaticImage src="../images/about-horizontal-min.png" alt="about me" />

      <Container>
        <Row className="">
          <h1 className="text-indigo-500 mt-4">Dj MuPro</h1>
          <p className="text-indigo-400">CEO, MuPro</p>
          <Col md={8} lg={12}>
            <p className="lead text-secondary">
              I'm baby jianbing shaman readymade ugh next level enamel pin,
              flexitarian cronut master cleanse. Chicharrones cliche vaporware 3
              wolf moon asymmetrical knausgaard plaid actually seitan portland
              meditation skateboard migas mlkshk selvage. Irony raw denim ennui,
              chillwave shabby chic skateboard lyft venmo waistcoat knausgaard
              vape glossier pop-up roof party listicle. Edison bulb hell of
              squid enamel pin palo santo.
            </p>
            <p className="lead text-secondary">
              Blog vaporware tote bag meditation 90's lumbersexual echo park
              pour-over air plant small batch authentic iceland distillery
              everyday carry literally.
            </p>
          </Col>
          <Col md={4} lg={12} className="px-md-5 px-lg-0">
            <h2 className="">Contacts</h2>
            <p className="text-indigo-400">Mupro@example.com</p>
            <h2 className="mt-4">Follow Me</h2>
            <div className="socials  d-flex gap-3 align-items-center text-white">
              <a href="https://github.com/">
                <FaInstagram className="social_icon" />
                <span className="visually-hidden">Instagram</span>
              </a>
              <a href="https://github.com/">
                <FaFacebook className="social_icon" />
                <span className="visually-hidden">Facebook</span>
              </a>
              <a href="https://github.com/">
                <FaTwitter className="social_icon" />
                <span className="visually-hidden">Twitter</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AboutPage;
