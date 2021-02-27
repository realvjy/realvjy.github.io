import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StoryList from "../components/story-list"
import Footer from "../components/footer"

class Story extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="vijay verma - stories" />
        <section className="header_section">
          <div className="container">
            <nav>
            <Link to={`/`} className="brand">

            </Link>
              <div className="menu">
                <ul className="menu-links">
                  <li className="active">
                    <a href="/story">story.</a>
                  </li>
                  <li>
                    <a href="/work">work.</a>
                  </li>
                  <li>
                    <a href="/contact">info.</a>
                  </li>
                </ul>
                <ul className="menu-social">
                  <li>
                    <a href="https://dribbble.com/realvjy" target="__blank"><img src="/dribbble.svg"/></a>
                  </li>
                  <li>
                    <a href="https://instagram.com/realvjy" target="__blank"><img src="/insta.svg"/></a>
                  </li>
                  <li>
                    <a href="https://figma.com/@realvjy" target="__blank"><img src="/figma.svg"/></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/realvjy" target="__blank"><img src="/twitter.svg"/></a>
                  </li>

                </ul>
              </div>
            </nav>
          </div>
        </section>
        <StoryList />
        <Footer />
      </Layout>
    )
  }
}

export default Story

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
