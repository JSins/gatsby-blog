import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Audioplayer from "../components/audioplayer"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title="Page two" />
      <div className="singlepost">
        <Link to="/blog">Zurück</Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.desc}</p>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>

        <Audioplayer file={post.frontmatter.podcast} />

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        desc
        podcast
      }
    }
  }
`
