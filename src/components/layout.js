import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Seo from "./seo";


const Layout = ({ children }) => (
  <>
      <Seo />
      <main>
         <div className="container-center-horizontal">             
                 {children}            
         </div>
      </main>
   </>
   );
  

export default Layout;
