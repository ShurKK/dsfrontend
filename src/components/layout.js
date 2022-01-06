import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Seo from "./seo";


const Layout = ({ children, header }) => {
const bgStyle = {
      color: 'blue',
      backgroundImage: 'url(' + header.background.url + ')',
      backgroundPosition: 'center bottom',
      backgroundSize: '100% auto',
      backgroundRepeat: 'no-repeat',
    };

return (
   <>
      <main style={bgStyle}>
         <div className="container-center-horizontal">
                 {children}
         </div>
         <div className="footer"></div>
      </main>
   </>
   )
}


export default Layout;
