import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import Img from "gatsby-image"

export default function Home({ data }, props) {
  return (
    <Layout>
      <AlbumsContainer>
        {data.allMarkdownRemark.nodes.map(album => (
          <a href={album.frontmatter.url}>
            <Img
              style={{ width: "100%" }}
              fluid={album.frontmatter.album_art.childImageSharp.fluid}
            />
          </a>
        ))}
      </AlbumsContainer>
      {console.log(data.allMarkdownRemark)}
    </Layout>
  )
}

const AlbumsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: 0 10px 10px 10px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 950px) {
  }
`

export const HomepageQuery = graphql`
  query HomepageQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/music/" } }) {
      nodes {
        frontmatter {
          album_art {
            childImageSharp {
              fluid(maxWidth: 700, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
          url
        }
        id
      }
    }
  }
`
