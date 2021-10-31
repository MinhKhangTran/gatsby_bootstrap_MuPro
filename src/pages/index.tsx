import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Services from "../components/Services";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <Hero />
      <Services />
    </Layout>
  );
};

export default IndexPage;
