import React from "react"
// import { Helmet } from "react-helmet"

import Layout from "../components/Layout/Layout"
import Collections from "../components/Collections/Collections"

import "../globalStyle.css"

const IndexPage = () => (
  <Layout>
    <Collections />
  </Layout>
)

export default IndexPage
