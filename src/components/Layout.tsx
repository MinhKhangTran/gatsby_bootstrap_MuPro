import React from "react";
import "../styles/main.scss";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";

const Layout = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path?: boolean;
}) => {
  return (
    <>
      <SkipNavLink />
      <div>
        <Navigation path={path} />
        <SkipNavContent />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
