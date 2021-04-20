import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Nav from "../components/Nav"
import { useLocation } from "@reach/router"

const Layout = ({ children }) => {
  const location = useLocation()
  return (
    <RootWrapper>
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
  font-size: 2rem;
  margin: 0;
`
const Email = styled.div`
  font-size: 1rem;
`

const Dob = styled.div`
  font-size: 1rem;
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
