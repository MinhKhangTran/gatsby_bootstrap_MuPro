import * as React from "react";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";
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
      <Pricing />
      <CTA />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
