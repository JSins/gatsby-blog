import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div>
      <Link to="/blog">Blog</Link>
      <Link to="/page-2">Page 2</Link>
      <Link to="/uber-uns">Über Uns</Link>
    </div>
  )
}

export default Menu
