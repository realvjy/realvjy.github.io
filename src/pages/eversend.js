import React from "react"
import { Link, graphql } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Logo from "../components/logo"


class Eversend extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="eversend - vijay verma" />
        <section className="header_section">
          <div className="container">
            <nav>
            <Logo />
              <div className="menu">
                <ul className="menu-links">
                  <li>
                    <a href="/nft" className="gradient nft" title="nft">nft.</a>
                  </li>
                  <li>
                    <a href="/story">story.</a>
                  </li>
                  <li className="active">
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

        <section className="work general">
          <div className="container">
            <div className="section-info">
              <h1>eversend</h1>
              <p>2017</p>
            </div>
            <div className="general-wrap ">
              <div className="text-box">
                <div className="text">
                  <p>A neobank for Africans, anywhere in the world. It’s a multi-currency e-wallet that allows you to exchange, spend and send money at the best possible rates. Insurance, virtual debit cards, and bill payments.</p>
                  <h3>Live Products</h3>
                  <ul>
                    <li><a href="https://apps.apple.com/app/eversend-neobank-for-africa/id1438341192" target="__blank"><img src="/ios.svg"/> iOS app</a></li>
                    <li><a href="https://play.google.com/store/apps/details?id=com.eversendapp" target="__blank"><img src="/android.svg"/> Android app</a></li>
                    <li><a href="https://eversend.co/" target="__blank"><img src="/web.svg"/> eversend.co</a></li>
                  </ul>
                </div>
              </div>

              <div className="screen-wrap">
                <div className="caption-text">
                  <h4>Screens (v1.0)</h4>
                </div>
                <div className="screens">
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/eversend/splash.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/eversend/dashboard.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/eversend/load.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/eversend/send-money.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/eversend/pay-dashboard.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/eversend/currency-send-list.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/eversend/profile-setting.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/eversend/refer-sign-ups.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/eversend/notify.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/eversend/eversend-cards.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/eversend/more-dash.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/eversend/trading-details.png"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="screen-wrap">
                <div className="caption-text">
                  <h4>Web Landing Page - 2017</h4>
                </div>
                <div className="screens">
                  <div className="screen-full">
                    <div className="mock">
                      <img src="/eversend/web-index.jpg"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="other-work">
                <h1>other works</h1>
                <ul>
                  <li><a href="/work">all.</a></li>
                  <li><a href="/sushi">sushi design system.</a></li>
                  <li><a href="/zomato" target="__blank">zomato.</a></li>
                </ul>
              </div>

            </div>
          </div>


        </section>


        <Footer />
      </Layout>
    )
  }
}

export default Eversend

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
