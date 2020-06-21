import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

class Zomato extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="zomato - vijay verma" />
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
                    <a href="/contact">contact.</a>
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
              <h1>zomato</h1>
              <p>2018-now</p>
            </div>
            <div className="general-wrap ">
              <div className="text-box">
                <div className="text">
                  <p>After 3 years of working as a freelance, I decided to join the design team at Zomato in mid-2018. My core responsibility here is to improve the overall user experience of Zomato products across all platforms (iOS, Android Phone, web) and maintain the consistency of design across the brand. My big achievement at Zomato culminated with the launch of the new design system we called <a href="/sushi">Sushi Design System</a>.</p>
                  <h3>Live Consumer Products</h3>
                  <ul>
                    <li><a href="https://bnc.lt/download-zomato-ios" target="__blank"><img src="/ios.svg"/> iOS app</a></li>
                    <li><a href="https://bnc.lt/download-z-android" target="__blank"><img src="/android.svg"/> Android app</a></li>
                    <li><a href="https://zomato.com/" target="__blank"><img src="/web.svg"/> zomato.com</a></li>
                  </ul>
                </div>
              </div>

              <div className="screen-wrap">
                <div className="caption-text">
                  <h4>Screens - v15 app (2020)</h4>
                </div>
                <div className="screens">
                  <div className="screen-full">
                    <img src="/zomato/v15-soon.png" />
                  </div>
                </div>
              </div>

              <div className="screen-wrap">
                <div className="caption-text">
                  <h4>Screens - v14 app (2019)</h4>
                </div>
                <div className="screens">
                  <div className="screen-full">
                    <img src="/zomato/zomato-app.png" />
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v14-splash.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v14-login.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v14-order-menu.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v14-customize-menu.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v14-restaurant.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v14-collections.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v14-collection-details.png"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v14-goout.png"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="screen-wrap">
                <div className="caption-text">
                  <h4>Screens - Web 2.0 (2020)</h4>
                </div>
                <div className="screens">
                  <div className="screen-full">
                    <img src="/zomato/web-2-rest.png" />
                  </div>
                  <div className="screen-full">
                    <img src="/zomato/web-2-order.png" />
                  </div>
                </div>
              </div>

              <div className="screen-wrap">
                <div className="caption-text">
                  <h4>Screens - v13 app (2018)</h4>
                </div>
                <div className="screens">
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v13-order_food_home.jpg"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v13-order-menu.jpg"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v13-search-map.jpg"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v13-restaurant.jpg"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v13-book-table-calender.jpg"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v13-search-suggestion.jpg"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v13-search.jpg"/>
                    </div>
                  </div>
                  <div className="screen-box">
                    <div className="mock">
                      <img src="/zomato/v13-single-dish.jpg"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="other-work">
                <h1>other works</h1>
                <ul>
                  <li><a href="/work">all.</a></li>
                  <li><a href="/sushi">sushi design system.</a></li>
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

export default Zomato

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
