const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const res = await graphql(
    `
      query {
        allContentfulCollections {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const collectionGalleryTemplate = path.resolve(
    `./src/templates/collectionGallery.js`
  )

  res.data.allContentfulCollections.edges.forEach(({ node }) => {
    createPage({
      path: `/collection/${node.slug}`,
      component: collectionGalleryTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
