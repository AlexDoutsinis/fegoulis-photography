import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, keywords }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          defaultImage: image
          siteUrl
          defaultKeywords: keywords
        }
      }
    }
  `)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    defaultKeywords,
  } = data.site.siteMetadata

  const seo = {
    title: title ? title + ` | ${defaultTitle}` : `Projects | ${defaultTitle}`,
    description: description || defaultDescription,
    image: `${image ? image : siteUrl + defaultImage}`,
    keywords: keywords || defaultKeywords,
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="image" content={seo.image} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="robots" content="index,follow" />
      <html lang="en" />
    </Helmet>
  )
}

export default SEO
