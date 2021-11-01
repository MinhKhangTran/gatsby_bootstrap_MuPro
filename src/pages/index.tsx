import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Project from "../components/Project";
import SEO from "../components/Seo";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <Hero />
      <Services />
      <Project />
      <Testimonials />
    </Layout>
  );
};

export default IndexPage;
