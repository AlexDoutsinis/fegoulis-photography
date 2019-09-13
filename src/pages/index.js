import React from "react"
import SEO from "../components/SEO"

import Layout from "../components/Layout/Layout"
import Collections from "../components/Collections/Collections"

import "../globalStyle.css"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Collections />
  </Layout>
)

export default IndexPage
