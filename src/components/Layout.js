import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Nav from "../components/Nav"
import { useLocation } from "@reach/router"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  const location = useLocation()

  const siteMetadata = {
    title: `Harrison Patrick Smith Music`,
    url: `https://www.harrisonpatricksmith.com/`,
    image: "static/icon.png",
    author: "zach lewton",
    description: `Website for Harrison Patrick Smith's music`,
  }

  return (
    <RootWrapper>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />

        <meta
          name="keywords"
          content="Harrison Patrick Smith, music, turtlenecked, musician, rock, rock and roll, weezer"
        />
        <meta http-equiv="content-language" content="en-us" />
        <meta name="og:title" content={siteMetadata.title} />
        <meta name="og:type" content="website" />
        <meta name="og:description" content={siteMetadata.description} />
        <meta name="og:image" content={siteMetadata.image} />
        <meta name="og:locale" content="en" />
        <meta name="og:url" content={siteMetadata.url} />
        <link rel="canonical" content={siteMetadata.url} />
      </Helmet>

      <NavContainer>
        <Name>Harrison Smith</Name>
        <Email>harrisonpatricksmith96@gmail.com</Email>
        <Dob>03/19/1996</Dob>

        <nav>
          <ul className="nav">
            {location.pathname == "/" ? (
              <Link to="/other-works">
                <li>other works </li>
              </Link>
            ) : (
              <Link to="/">
                <li>home </li>
              </Link>
            )}
          </ul>
        </nav>
      </NavContainer>
      <ContentContainer> {children}</ContentContainer>
    </RootWrapper>
  )
}

const NavContainer = styled.div`
  width: 30%;
  padding-left: 5px;
  @media (max-width: 950px) {
    width: 100%;
  }
`
const ContentContainer = styled.div`
  width: 70%;

  height: 100vh;
  padding-top: 5px;

  @media (max-width: 950px) {
    width: 100%;
  }
`

const Name = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`
const Email = styled.div`
  font-size: 0.75rem;
`

const Dob = styled.div`
  font-size: 0.75rem;
`

const RootWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;

  @media (max-width: 950px) {
    flex-direction: column;
  }

  /* min-height: 100vh; */
`

export default Layout
