import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import CountUp from "react-countup";
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

  const [loading, setLoading] = React.useState(false);
  const onStart = () => {
    setLoading(true);
  };
  const onEnd = () => {
    setLoading(false);
  };
  const containerProps = {
    "aria-busy": loading,
  };

  const testimonialsArray = [
    {
      id: 1,
      icon: <i aria-hidden="true" className="bi bi-badge-3d-fill"></i>,
      text: "Peter Production",
      title: "peterproduction.com",
    },
    {
      id: 2,
      icon: <i aria-hidden="true" className="bi bi-badge-4k-fill"></i>,
      text: "Dennis Mixing",
      title: "dennismixing.com",
    },
    {
      id: 3,
      icon: <i aria-hidden="true" className="bi bi-badge-8k-fill"></i>,
      text: "John Podcast",
      title: "johnpodcast.com",
    },
    {
      id: 4,
      icon: <i aria-hidden="true" className="bi bi-badge-cc-fill"></i>,
      text: "Jane Production",
      title: "janeproduction.com",
    },
  ];

  return (
    <section id="testimonials" className="section">
      <div className="testimonials_wrapper">
        <GatsbyImage
          style={{ gridArea: "1/1" }}
          image={getImage(testi_img)!}
          alt="mixboard"
        />
        <Container className="">
          <Row className="text-white h-100">
            <Col xs={6} lg={3} className="single_text">
              <CountUp
                className="mb-0"
                end={400}
                duration={3}
                onStart={onStart}
                onEnd={onEnd}
                delay={1}
                suffix=" +"
                containerProps={containerProps}
              />
              <p className="">Gigs</p>
            </Col>
            <Col xs={6} lg={3} className="single_text">
              <CountUp
                className="mb-0"
                end={20}
                duration={3}
                onStart={onStart}
                onEnd={onEnd}
                delay={1}
                suffix=" +"
                containerProps={containerProps}
              />
              <p className="">Concerts</p>
            </Col>
            <Col xs={6} lg={3} className="single_text">
              <CountUp
                className="mb-0"
                end={10}
                duration={3}
                onStart={onStart}
                onEnd={onEnd}
                delay={1}
                suffix=" +"
                containerProps={containerProps}
              />
              <p className="">Podcasts</p>
            </Col>
            <Col xs={6} lg={3} className="single_text">
              <CountUp
                className="mb-0"
                end={15}
                duration={3}
                onStart={onStart}
                onEnd={onEnd}
                delay={1}
                suffix=" +"
                containerProps={containerProps}
              />
              <p className="">Partners</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-5">
        <h2>Trusted by these partners</h2>
        <p className="lead text-secondary mb-5">
          I'm baby activated charcoal yr occupy synth retro kitsch portland.{" "}
        </p>
        <Row>
          {testimonialsArray.map((testi) => {
            return (
              <Col key={testi.id} lg={6} className="d-flex column_wrapper">
                <div className="icon_wrapper bg-indigo-300 text-white d-flex justify-content-center align-items-center rounded me-3">
                  {testi.icon}
                </div>
                <div className="text_wrapper ">
                  <h3 className="text-uppercase mb-0">{testi.title}</h3>
                  <p>{testi.text}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
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
              aspectRatio: 3
              formats: WEBP
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
`;

export default Testimonials;
