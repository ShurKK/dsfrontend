import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import EpisodesComponent from "../components/episodes";
import "../assets/css/main.css";

const IndexPage = () => {
  const data = useStaticQuery(query);console.log('dsfsdfewflkmsdffs sdfkldsnflkdsjfsd fsdklfnsdlfsd flksdgfnrglkfgoweqngfovlsdvf we fsedfnmsdfsd f'+{data});

  return (
    //<Layout>
      <>       
        <div className="header">
            <h1 className="text-1 valign-text-middle header-1">{data.strapiHomepage.hero.title}</h1>
        </div>          
        <EpisodesComponent episodes={data.allStrapiEpisodes.edges} />   
       </> 
   // </Layout>
  );
};



const query = graphql`
  query {
    strapiHomepage {
        id
        hero {
          id
          title
        }
        seo {
          metaDescription
          metaTitle
          id
        }
      }
      allStrapiSeasons {
        nodes {
          name
          number
          episodes {
            id
            name
            number
          }
        }
      }
      allStrapiEpisodes {
        edges {
          node {
            actions {
              Description
              date_and_time
              media {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              id
              episode
            }
            name
            number
            season {
              name
              number
            }
            thumb {
              url
              name
              ext
              alternativeText
              height
              width
              localFile {
                childImageSharp 
                {                    
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
    
`;

export default IndexPage;
