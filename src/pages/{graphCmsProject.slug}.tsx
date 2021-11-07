import { graphql, Link, navigate } from "gatsby";
import React from "react";
import { Button, Container } from "react-bootstrap";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ReactMarkdown from "react-markdown";

import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { SingleProjectQuery } from "../types.generated";

import Moment from "react-moment";

const SingleProject = ({ data }: { data: SingleProjectQuery }) => {
  // @ts-expect-error
  const singleProjectImg = data.graphCmsProject.img as IGatsbyImageData;

  return (
    <Layout path>
      <SEO title={data.graphCmsProject?.title!} />
      <div className="single_project_image text-center">
        <GatsbyImage
          image={getImage(singleProjectImg)!}
          alt={data.graphCmsProject?.title!}
        />
      </div>
      <Container className="single_project_image_container pb-5">
        <Button
          variant="outline-primary"
          className="my-4"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go Back
        </Button>
        <h1 className="text-indigo-500">{data.graphCmsProject?.title}</h1>
        <div className="">
          <p className="text-indigo-400">
            Posted by {data.graphCmsProject!.author} on{" "}
            <Moment className="" format="MMMM DD, YYYY">
              {data.graphCmsProject!.date as any}
            </Moment>
          </p>
        </div>
        <article className="mt-4">
          <ReactMarkdown>{data.graphCmsProject?.content!}</ReactMarkdown>
        </article>
      </Container>
      <Container>
        <p className="display-5 text-center text-indigo-500 mt-5">
          Talk to us about your project
        </p>
        <p className="lead text-secondary text-center">
          I'm baby activated charcoal yr occupy portland.
        </p>
        <div className="hire_us_wrapper d-flex justify-content-center">
          <Button>Hire us</Button>
        </div>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query SingleProject($slug: String!) {
    graphCmsProject(slug: { eq: $slug }) {
      author
      content
      date
      img {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
      slug
      title
    }
  }
`;

export default SingleProject;
