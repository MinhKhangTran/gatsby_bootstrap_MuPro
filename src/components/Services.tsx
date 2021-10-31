import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ServiceQuery } from "../types.generated";

const Services = () => {
  const {
    allFile: { nodes },
  }: ServiceQuery = useStaticQuery(query);
  const serviceImg = nodes[0].childImageSharp
    ?.gatsbyImageData as IGatsbyImageData;
  const serviceArray = [
    {
      id: 1,
      icon: <i aria-hidden="true" className="bi bi-music-note-beamed"></i>,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      title: "Mixing",
    },
    {
      id: 2,
      icon: <i aria-hidden="true" className="bi bi-earbuds"></i>,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      title: "Recording",
    },
    {
      id: 3,
      icon: <i aria-hidden="true" className="bi bi-sliders"></i>,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      title: "Production",
    },
  ];
  return (
    <section id="service" className="section">
      <Container>
        <h2>This is what we offer</h2>
        <p className="lead text-secondary mb-5">
          I'm baby activated charcoal yr occupy synth retro kitsch portland.{" "}
        </p>
        <Row className="row_service">
          <Col className="col_service" md={6}>
            {serviceArray.map((service) => {
              return (
                <div key={service.id} className="service_feat d-flex mt-lg-5">
                  <div className="icon_wrapper bg-indigo-300 text-white d-flex justify-content-center align-items-center">
                    {service.icon}
                  </div>
                  <div className="text_wrapper">
                    <h3>{service.title}</h3>
                    <p className="text-secondary">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </p>
                  </div>
                </div>
              );
            })}
          </Col>
          <Col md={6} className="d-none d-md-flex">
            <GatsbyImage
              className="service_img"
              image={getImage(serviceImg)!}
              alt="a mic in a mixing room"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export const query = graphql`
  query Service {
    allFile(filter: { name: { eq: "service" } }) {
      totalCount
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default Services;
