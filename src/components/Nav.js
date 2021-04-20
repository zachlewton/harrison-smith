import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { useLocation } from "@reach/router"

const Nav = () => {
  const location = useLocation()

  return (
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
  )
}

export default Nav
