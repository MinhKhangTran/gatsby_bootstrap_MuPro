import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Homepage" />
      <Hero />
    </Layout>
  );
};

export default IndexPage;
