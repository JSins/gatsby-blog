import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    {data.allMarkdownRemark.edges.reverse().map(post => (
      <div key={post.node.id} className="blog-post">
        <small className="blog-post-date">
          Hochgeladen am {post.node.frontmatter.date}
        </small>
        <h2>{post.node.frontmatter.title}</h2>
        <p>{post.node.frontmatter.desc}</p>

        <div className="blog-post-bottom">
          <div>Gepostet von {post.node.frontmatter.author}</div>
          <div>45min</div>
          <div>
            <Link to={post.node.frontmatter.path}> Weiterlesen...</Link>
          </div>
        </div>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            desc
            postimg
          }
        }
      }
    }
  }
`

export default BlogPage
