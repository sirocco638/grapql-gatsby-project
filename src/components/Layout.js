import React from "react"
import propTypes from "prop-types"

import Nav from "./Nav"

import "./layout.css"

const Layout = ({children}) => (
  <>
    <Nav/>
    <main className="main">{children}</main>
  </>
)

Layout.propTypes = {
  children: propTypes.node.isRequired
}

export default Layout