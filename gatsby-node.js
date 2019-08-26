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
              id
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

  const collectionTemplate = path.resolve(`./src/templates/collection.js`)

  res.data.allContentfulCollections.edges.forEach(({ node }) => {
    createPage({
      path: `/collection/${node.slug}`,
      component: collectionTemplate,
      context: {
        slug: node.slug,
        id: node.id,
      },
    })
  })
}
