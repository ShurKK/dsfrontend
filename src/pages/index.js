import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import EpisodesComponent from "../components/episodes";
import CharactersComponent from "../components/characters";
import "../assets/css/main.css";

const IndexPage = () => {
  const data = useStaticQuery(query);
  console.log(data.strapiHomepage);

  return (
    <Layout>          
        <div className="header">
            <h1 className="text-1 valign-text-middle header-1">{data.strapiHomepage.hero.title}</h1>
        </div>          
        <EpisodesComponent episodes={data.allStrapiEpisodes.edges} />
        <CharactersComponent characters={data.allStrapiCharacter.edges} />
    </Layout>
  );
};



const query = graphql`
  query {
    strapiHomepage {
        hero {
          title
          id
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
      allStrapiCharacter {
        edges {
          node {
            id
            becomes_known_episode {
              number
              id
            }
            Name
            becomes_known_season {
              id
              number
            }
            general_bio
            bio_updates {
              bio_update_text
              episode
              photo_update {
                localFile {
                  childrenImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            Portrait {
              alternativeText
              ext
              height
              url
              width
              localFile {
                childImageSharp {
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
