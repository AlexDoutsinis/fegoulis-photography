import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <Link to="/">
        <h1>{data.site.siteMetadata.title}</h1>{" "}
      </Link>
    </header>
  )
}

export default Menu
