import React from "react"
import Layout from "../components/Layout"
import {graphql} from "gatsby"

import Post from "../components/Post"


export const AllBlogsQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            path
            description
            author
          }
        }
      }
    }
  }
`

export default ({data}) => (
  <Layout>
    <h1>Blog</h1>
    {
      data.allMarkdownRemark.edges.map(post => {
        const { title, author, date, description, path } = post.node.frontmatter;

        return (
          <Post 
            title={title}
            author={author}
            date={date}
            description={description}
            path={path}
          />
        )
      })
    }
  </Layout>
)