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
  background-color: white;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  padding: 5px 50px 0 50px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`

export const HomepageQuery = graphql`
  query HomepageQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/music/" } }) {
      nodes {
        frontmatter {
          album_art {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
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
