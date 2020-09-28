const _ = require(`lodash`)
const moment = require(`moment`)
const { getMdxContentSlug } = require(`../get-mdx-content-slug`)
const { getTemplate } = require(`../get-template`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const slug = getMdxContentSlug(node, getNode(node.parent))
  
  if (!slug) return

  createNodeField({ node, name: `slug`, value: slug })

  const { date, draft, excerpt } = node.frontmatter || {}

  createNodeField({
    node,
    name: `released`,
    value: !draft && !!date && moment.utc().isSameOrAfter(moment.utc(date)),
  })
  
  // If an excerpt is defined, use it, otherwise default to autogenerated excerpt
  createNodeField({
    node,
    name: `excerpt`,
    value: excerpt || node.excerpt,
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = getTemplate(`template-blog-post`)
  const blogListTemplate = getTemplate(`template-blog-list`)

  const { data, errors } = await graphql(`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date, fields___slug] }
        limit: 10000
        filter: {
          fileAbsolutePath: { ne: null }
          frontmatter: { draft: { ne: true } }
        }
      ) {
        nodes {
          fields {
            slug
            released
          }
          frontmatter {
            title
          }
        }
      }
    }
  `)
  if (errors) throw errors

  const blogPosts = data.allMdx.nodes

  const releasedBlogPosts = blogPosts.filter(post => 
    _.get(post, `fields.released`)
  )

  // Create blog-list pages.
  const postsPerPage = 8
  const numPages = Math.ceil(releasedBlogPosts.length / postsPerPage)

  Array.from({
    length: numPages,
  }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/page/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Create blog-post pages.
  blogPosts.forEach((node, index) => {
    let next = index === 0 ? null : blogPosts[index - 1]
    if (next && !_.get(next, `fields.released`)) next = null

    const prev = index === blogPosts.length - 1 ? null : blogPosts[index + 1]

    createPage({
      path: `${node.fields.slug}`, // required
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
        prev: prev && {
          title: prev.frontmatter.title,
          link: prev.fields.slug,
        },
        next: next && {
          title: next.frontmatter.title,
          link: next.fields.slug,
        },
      },
    })
  })
}
