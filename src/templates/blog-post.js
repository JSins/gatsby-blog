import React from "react"
import { Link } from "gatsby"
import Custom from "../components/javascript/custom"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title="Page two" />
      <div>
        <Link to="/blog">Zurück</Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.desc}</p>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <button id="playbutton">Play</button>
        <audio id="lol">
          <source src={post.frontmatter.podcast}></source>
        </audio>
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
