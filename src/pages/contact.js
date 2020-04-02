import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

class Contact extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="vijay verma - contacts" />
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
                  <li>
                    <a href="/work">work.</a>
                  </li>
                  <li className="active">
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

        <section className="work story">
          <div className="container">
            <div className="section-info">
              <h1>contact.</h1>
              <p>It’s not that hard to find my contact just search <a href="https://www.google.com/search?q=realvjy" className="normal-link">realvjy</a>.</p>
            </div>
            <div className="work-wrap ">
              <div className="contact-box">
                <img src="/cover.png" alt="vijay verma desk" className="cover-img"/>


                <div className="perm-box">
                  <div className="perm">
                    <h1>Serious enquiry for awards</h1>
                    <p>For partnerships, collaborations, sponsorships, commissions, events, you can reach out to me at <a href="mailto:hello@vijayverma.co?subject=Saying Hello!!!" className="blue-link">hello@vijayverma.co</a>.</p>
                    <p>I'll reply back to email in 1-2 working days.</p>
                  </div>
                </div>

                <div className="perm-box">
                  <div className="perm">
                    <h1>Free Skillshare Membership</h1>
                    <p>I have <strong>free </strong>gift for you guys. Signup with this link <strong><a href="https://skl.sh/realvjy" className="blue-link">skl.sh/realvjy</a></strong> and you will get 2 free months of Skillshare Premium.</p>
                    <p>You can also Use this Coupon Code: <strong><a href="https://skl.sh/realvjy" className="blue-link">igamb988</a></strong> </p>
                  </div>
                </div>

                <div className="perm-box">
                  <div className="perm">
                    <h1>Permision to repost my work</h1>
                    <p>You can post, as long as link proper credit back to my profile <strong>realvjy</strong> on any platform or this <strong>website</strong>.</p>
                  </div>
                </div>

                <div className="perm-box">
                  <div className="perm">
                    <h1>Social profiles</h1>
                    <p>You can connect me on these platform with user name realvjy, even on my home planet <strong><a href="https://mars.nasa.gov/participate/send-your-name/mars2020/certificate/892758447781" target="__blank" className="blue-link">mars</a>.</strong></p>
                    <div className="social-profile">
                      <ul className="contact-social">
                        <li>
                          <a href="https://dribbble.com/realvjy" target="__blank"><img src="/dribbble.svg" alt="dribbble"/></a>
                        </li>
                        <li>
                          <a href="https://instagram.com/realvjy" target="__blank"><img src="/insta.svg" alt="insta"/></a>
                        </li>
                        <li>
                          <a href="https://twitter.com/realvjy" target="__blank"><img src="/twitter.svg" alt="tw"/></a>
                        </li>
                        <li>
                          <a href="https://www.behance.net/realvjy" target="__blank"><img src="/behance.svg" alt="be"/></a>
                        </li>
                        <li>
                          <a href="https://medium.com/@realvjy" target="__blank"><img src="/medium.svg" alt="medium" /></a>
                        </li>
                        <li>
                          <a href="https://www.buymeacoffee.com/realvjy" target="__blank"><img src="/coffee.svg" alt="tiktok" /></a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/realvjy/" target="__blank"><img src="/linkedin.svg" alt="in"/></a>
                        </li>
                        <li>
                          <a href="https://www.producthunt.com/@realvjy" target="__blank"><img src="/product-hunt.svg" alt="ph"/></a>
                        </li>
                        <li>
                          <a href="https://facebook.com/realvjy" target="__blank"><img src="/facebook.svg" alt="facebook" /></a>
                        </li>
                        <li>
                          <a href="https://www.tiktok.com/@realvjy" target="__blank"><img src="/tiktok.svg" alt="tiktok" /></a>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div className="story-sub">
              <div className="form">
                <h1>Get design recipes from the master chef</h1>
                <p>Subscribe to the newsletter to get exclusive updates & digital art inspiration in your inbox.</p>

                <div id="mc_embed_signup">
                  <form action="https://vijayverma.us14.list-manage.com/subscribe/post?u=ed1f62133209766c02f08fd47&amp;id=c4285438c3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll" className="newsletter">
                      <div className="mc-field-group">
                      	<label for="mce-EMAIL" style={{display:`none`}}>Email Address </label>
                          <div className="inputbox">
                      	   <input type="email" placeholder="Your email address please" name="EMAIL" className="required email" id="mce-EMAIL" />
                          </div>
                      </div>
                      <div className="sub-action">
                        <div id="mce-responses" className="clear">
                        		<div className="response" id="mce-error-response" style={{display:`none`}}></div>
                        		<div clasNames="response" id="mce-success-response" style={{display:`none`}}></div>
                        </div>
                        <div style={{position: `absolute`, left:`-5000px`}}aria-hidden="true">
                          <input type="text" name="b_ed1f62133209766c02f08fd47_c4285438c3" tabindex="-1" value="" />
                        </div>
                        <div className="clear">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button sub-button" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>


              </div>
            </div>
          </div>
        </section>

        <Footer />
      </Layout>
    )
  }
}

export default Contact

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
