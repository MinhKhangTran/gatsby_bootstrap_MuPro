import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import { TestimonialsQuery } from "../types.generated";
import { Col, Container, Row } from "react-bootstrap";

const Testimonials = () => {
  const {
    allFile: { edges },
  }: TestimonialsQuery = useStaticQuery(query);
  const testimonial = edges[0].node;
  const testi_img = testimonial.childImageSharp
    ?.gatsbyImageData as IGatsbyImageData;

  return (
    <section id="testimonials" className="section">
      <div className="testimonials_wrapper position-relative">
        <GatsbyImage image={getImage(testi_img)!} alt="mixboard" />
        <Container className="position-absolute">
          <Row className="text-white h-100">
            <Col xs={6} lg={3} className="single_text">
              <p className="mb-0">400</p>
              <p className="">Gigs</p>
            </Col>
            <Col xs={6} lg={3} className="single_text">
              <p className="mb-0">20</p>
              <p className="">Concerts</p>
            </Col>
            <Col xs={6} lg={3} className="single_text">
              <p className="mb-0">10</p>
              <p className="">Podcasts</p>
            </Col>
            <Col xs={6} lg={3} className="single_text">
              <p className="mb-0">15</p>
              <p className="">Partners</p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export const query = graphql`
  query Testimonials {
    allFile(filter: { name: { regex: "/testi/" } }) {
      edges {
        node {
          id
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              width: 1300
              height: 375
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
`;

export default Testimonials;
