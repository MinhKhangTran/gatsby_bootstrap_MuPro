import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { CtaQuery } from "../types.generated";
import { Button } from "react-bootstrap";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useMediaQuery } from "../helper/useMediaQuery";

const CTA = () => {
  const data: CtaQuery = useStaticQuery(query);
  const ctaImage = data.allFile.edges[0].node.childImageSharp?.gatsbyImageData;
  let isPageWide = useMediaQuery("(min-width: 992px)");

  return (
    <section id="cta" className="section">
      <GatsbyImage
        image={getImage(ctaImage as IGatsbyImageData)!}
        alt="Call to action image"
        style={{ gridArea: "1/1" }}
      />

      <div className="cta_text container">
        <div className="article text-center text-white">
          <h2 className="">Book a session now</h2>
          <p className="lead">I'm baby vice knausgaard lyft street art. </p>

          <Button
            // @ts-expect-error
            size={`${isPageWide ? "lg" : ""}`}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export const query = graphql`
  query CTA {
    allFile(filter: { name: { regex: "/CTA/" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              layout: FULL_WIDTH
              aspectRatio: 3
              formats: WEBP
            )
          }
        }
      }
    }
  }
`;

export default CTA;
