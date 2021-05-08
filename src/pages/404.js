import React from "react"
import { Link, graphql } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Footer from "../components/footer"
import Logo from "../components/logo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <>
        <section className="header_section">
          <div className="container">
            <nav>
            <Logo />
              <div className="menu">
                <ul className="menu-links">
                  <li>
                    <a href="/nfts" className="gradient nft" title="nft">nfts.</a>
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
        <div className="container">
          <div className="error-box">
            <img src="/404.gif" />
            <h1>FYI - Matargasti is my favorite song</h1>
            <p>Matargashti Khuli Sadak Mein <br/>
Tagdi Tadak Bhadak Mein <br/>
Aule Girre Sulagte Se <br/>
Sulagte Se Sadak Mein <br/>
Chatri Na Thi Bagal Mein <br/>
Aaya Hi Na Akal Mein <br/>
Ke Bhaage Hum Ya Bheege Hum <br/>
Akkad Mein Toh Socha Phir ...</p>
          </div>
        </div>
        <Footer/>
        </>

      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
