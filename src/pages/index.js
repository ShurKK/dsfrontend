//import React from "react";
import React, {  useState, useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import EpisodesComponent from "../components/episodes";
import CharactersComponent from "../components/characters";
import SeasonsComponent from "../components/seasons";
import ActionsComponent from "../components/actions";
import Seo from "../components/seo";
import CharacterBio from "../components/character_bio";
import "../assets/css/main.css";
import ContextContainer from "../components/context_container";
import Header from "../components/header";

// Create context container in a global scope so it can be visible by every component
const initialAppState = {
  picked_episode: 1, picked_season: 1, picked_character_id: null
};

const IndexPage = () => {
  const data = useStaticQuery(query);
  const [appState, updateAppState] = useState(initialAppState);

  return (
    <ContextContainer.Provider value={{ appState, updateAppState }}>
    <Layout header = {data.strapiHeader}>
        <Seo title={data.strapiHomepage.hero.title} meta={ [ { name: `keywords`, content: data.strapiHomepage.seo.metaTags } ] } />
        <Header heroTitle = { data.strapiHomepage.hero.title } header = { data.strapiHeader } />
        <SeasonsComponent seasons={data.allStrapiSeasons.nodes} />
        <EpisodesComponent episodes={data.allStrapiEpisodes.edges.sort(function(a, b){return a.node.number - b.node.number})} />
        <CharactersComponent characters={data.allStrapiCharacter.edges}  />
        <CharacterBio characters={data.allStrapiCharacter.edges} bio_updates={data.allStrapiBioUpdates.edges} />
        <ActionsComponent actions={data.allStrapiAction.edges} />
    </Layout>
    </ContextContainer.Provider>
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
          metaTags
        }
      }
      strapiHeader {
        background {
          url
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
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
              id
              name_update
              episode
              season
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
                  fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
      allStrapiAction {
        edges {
          node {
            id
            Description
            date_and_time
            name
            time_in_episode
            world
            media {              
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
              url
            }           
            episode {
              id
              season
              name
              number
            }
            characters {          
              id
              Name
              Portrait {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                      ...GatsbyImageSharpFluid
                      ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                      gatsbyImageData
                  }
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
      allStrapiBioUpdates {
        edges {
          node {
            bio_update_text
            character {
              id
            }
            episode {
              id
              name
              number
            }
            name_update
            photo_update {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            season {
              id
              name
              number
            }
          }
        }
      }
    }
    
`;

export default IndexPage;
