import React from "react"
import { Link, graphql } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Layout from "../components/layout"
import SEO from "../components/seo"
import NFTsList from "../components/nfts-list"
import Footer from "../components/footer"
import Logo from "../components/logo"


class NFT extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="vijay verma - nfts" />
        <section className="header_section">
          <div className="container">
            <nav>
              <Logo />
              <div className="menu">
                <ul className="menu-links">
                  <li>
                    <a href="/nft" className="gradient nft" title="nft">NFTs.</a>
                  </li>
                  <li>
                    <a href="/story">story.</a>
                  </li>
                  <li>
                    <a href="/work">work.</a>
                  </li>
                  <li>
                    <a href="/about">about.</a>
                  </li>
                </ul>
                <ul className="menu-social">
                  <li>
                    <a href="https://dribbble.com/realvjy" target="__blank"><img src="/dribbble.svg" /></a>
                  </li>
                  <li>
                    <a href="https://instagram.com/realvjy" target="__blank"><img src="/insta.svg" /></a>
                  </li>
                  <li>
                    <a href="https://figma.com/@realvjy" target="__blank"><img src="/figma.svg" /></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/realvjy" target="__blank"><img src="/twitter.svg" /></a>
                  </li>

                </ul>
                <ThemeToggler>
                  {({ theme, toggleTheme }) => (
                    <div className="mode-toggle">
                      <label>
                        <input
                          type="checkbox"
                          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                          checked={theme === 'dark'}
                          id="dmode"
                        />{' '}
                      </label>
                    </div>
                  )}
                </ThemeToggler>
              </div>
            </nav>
          </div>
        </section>
        <NFTsList />
        <Footer />
      </Layout>
    )
  }
}

export default NFT

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
