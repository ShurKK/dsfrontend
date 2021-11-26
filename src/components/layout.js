import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Seo from "./seo";


const Layout = ({ children }) => (
  <>
      <Seo />
            <div className="container-center-horizontal">
             <div className="x1920x1080-third-step">
                 <main>{children}</main>
            </div>
            </div>
   </>
   );
  

export default Layout;
