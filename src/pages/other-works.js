import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/Layout"

export default function OtherWorks({ data }, props) {
  return (
    <Layout>
      {console.log(data)}

      <WorkContainer>
        {data.allMarkdownRemark.nodes.map(work => (
          <WorkCard>
            <p style={{ margin: "0" }}>
              <span style={{ fontSize: "1.5rem" }}>
                {work.frontmatter.title}
              </span>
              - {work.frontmatter.artist}
            </p>
            {/* <Title>{work.frontmatter.title}</Title>
            <Artist>{work.frontmatter.artist}</Artist> */}

            <UrlLink href={work.frontmatter.url} target="_blank">
              {work.frontmatter.url}
            </UrlLink>
            <div style={{ marginTop: "5px" }}>{work.frontmatter.role}</div>
          </WorkCard>
        ))}
      </WorkContainer>
    </Layout>
  )
}

const WorkContainer = styled.div``

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0 0;
`

const Artist = styled.p`
  font-size: 1rem;
  margin: 0;
`

const UrlLink = styled.a`
  font-size: 0.75rem;
  margin: 0 0 5px 0;
  color: #474747;
`

const WorkCard = styled.div`
  width: 100%;
  padding: 10px 10px 10px 40%;
`

export const WorksQuery = graphql`
  query WorksQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/other_work/" } }) {
      nodes {
        frontmatter {
          url
          role
          title
          artist
        }
        id
      }
    }
  }
`
