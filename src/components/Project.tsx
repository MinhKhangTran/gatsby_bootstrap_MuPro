import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { ProjectQuery } from "../types.generated";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import Moment from "react-moment";

const Project = () => {
  const {
    allGraphCmsProject: { nodes },
  }: ProjectQuery = useStaticQuery(query);
  const projects = nodes;

  return (
    <section id="project" className="section">
      <Container>
        <h2>Check our latest works</h2>
        <p className="lead subtitle text-secondary mb-5">
          I'm baby activated charcoal yr occupy synth retro kitsch portland.
        </p>
        <Row className="project_row">
          {projects.map((project) => {
            // @ts-expect-error
            const projectImage = project.img as IGatsbyImageData;
            return (
              <Col key={project.id} lg={4} md={6} className="mb-5 mb-lg-0">
                <GatsbyImage
                  image={getImage(projectImage)!}
                  alt={project.title!}
                  className="project_img"
                />
                <Link to={`/${project.slug}`}>
                  <h3 className="text-primary mt-1 mb-2">{project.title}</h3>
                </Link>
                <p className="lead text-secondary">{project.excerpt}</p>

                <div className="project_footer mt-lg-5">
                  <p className="text-indigo-400 mb-0">
                    Written by {project.author}
                  </p>
                  <div className="project_footer_wrapper text-indigo-400 d-flex gap-1">
                    <Moment className="" format="MMMM DD, YYYY">
                      {project.date as any}
                    </Moment>
                    <p>-</p>
                    <p>{project.readingTime} min read</p>
                  </div>
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
  query Project {
    allGraphCmsProject {
      nodes {
        id
        excerpt
        author
        date
        title
        readingTime
        slug
        img {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
    }
  }
`;

export default Project;
