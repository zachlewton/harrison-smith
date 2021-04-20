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
  flex-basis: 33%;
  background-color: red;
`
const ContentContainer = styled.div`
  flex-basis: 77%;
  background-color: blue;
  height: 100vh;
  overflow: auto;
  overflow-x: none;
`

const Name = styled.h1`
  font-size: 4rem;
  margin: 0;
`
const Email = styled.div`
  font-size: 1.5rem;
`

const Dob = styled.div`
  font-size: 1.5rem;
`

const RootWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;

  min-height: 100vh;
  min-width: 100vw;
`

export default Layout
