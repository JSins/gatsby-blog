import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      className="header-inner"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <div className="logo">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <div className="navigation">
        <Menu />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
