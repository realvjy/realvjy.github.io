import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

class Sushi extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="sushi design system - vijay verma" />
        <section className="header_section">
          <div className="container">
            <nav>
              <Link to={`/`} className="brand">
                <img src="/realvjy.svg" className="logo" />
              </Link>
              <div className="menu">
                <ul className="menu-links">
                  <li>
                    <a href="/story">story.</a>
                  </li>
                  <li className="active">
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

        <section className="work general">
          <div className="container">
            <div className="section-info">
              <h1>sushi design system</h1>
              <p>2019</p>
            </div>
            <div className="general-wrap ">
              <div className="text-box">
                <div className="text">
                  <p>Sushi is zomato’s very own design system, which helps build robust user interfaces following a clean and simple design language.</p>
                  <h3>Read here : <a href="https://medium.com/zomato-technology/zomatos-new-sushi-design-system-d7f4f98664c5" target="_blank" className="blue-link">zomato’s new Sushi Design System</a></h3>
                </div>
              </div>

              <div className="screen-wrap">
                <div className="caption-text">
                  <h4>sushi - demo app screens</h4>
                </div>
                <div className="screens">
                  <div className="screen-full">
                    <img src="/sushi/sushi-cover.png"/>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/sushi/sushi-splash.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/sushi/sushi-home.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/sushi/sushi-color-system.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/sushi/sushi-typography.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/sushi/sushi-icons.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/sushi/sushi-buttons.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/sushi/sushi-about.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/sushi/sushi-about-dark.png"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="other-work">
                <h1>other works</h1>
                <ul>
                  <li><a href="/work">all.</a></li>
                  <li><a href="/zomato">zomato.</a></li>
                  <li><a href="/illlustrations">illlustrations.</a></li>
                  <li><a href="/eversend">eversend.</a></li>
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

export default Sushi

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
