import React from "react"
import { Link, graphql } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Logo from "../components/logo"

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
                  <li className="active">
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

        <section className="work story">
          <div className="container">
            <div className="section-info">
              <h1 className="gradient pink">about.</h1>
              <p>It’s not that hard to find my contact just search <a href="https://www.google.com/search?q=realvjy" className="normal-link">realvjy</a>.</p>
            </div>
            <div className="work-wrap ">
              <div className="contact-box">
                <img src="/workspace.jpg" alt="vijay verma desk" className="cover-img"/>


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
                    <p>I have <strong>free </strong>gift for you guys. Signup with this link <strong><a href="https://www.skillshare.com/signup?coupon=igamb2" className="blue-link">skl.sh/realvjy</a></strong> and you will get 2 free months of Skillshare Premium.</p>
                    <p>You can also Use this Coupon Code: <strong><a href="https://www.skillshare.com/signup?coupon=igamb2" className="blue-link">igamb2</a></strong> </p>
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
                    <p>You can connect me on these platform with username <strong>realvjy</strong>, even on my home planet <strong><a href="https://mars.nasa.gov/participate/send-your-name/mars2020/certificate/892758447781" target="__blank" className="blue-link">mars</a>.</strong></p>
                    <div className="social-profile">
                      <ul className="contact-social">
                        <li>
                          <a href="https://dribbble.com/realvjy" target="__blank" title="dribbble"><img src="/dribbble.svg" alt="dribbble"/></a>
                        </li>
                        <li>
                          <a href="https://instagram.com/realvjy" target="__blank" title="instagram"><img src="/insta.svg" alt="insta"/></a>
                        </li>
                        <li>
                          <a href="https://figma.com/@realvjy" target="__blank" title="figma"><img src="/figma.svg" alt="figma"/></a>
                        </li>
                        <li>
                          <a href="https://twitter.com/realvjy" target="__blank" title="twitter"><img src="/twitter.svg" alt="tw"/></a>
                        </li>
                        <li>
                          <a href="https://www.behance.net/realvjy" target="__blank" title="behance"><img src="/behance.svg" alt="be"/></a>
                        </li>
                        <li>
                          <a href="https://medium.com/@realvjy" target="__blank" title="medium"><img src="/medium.svg" alt="medium" /></a>
                        </li>
                        <li>
                          <a href="https://www.buymeacoffee.com/realvjy" target="__blank" title="buymeacoffee"><img src="/coffee.svg" alt="coffee" /></a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/realvjy/" target="__blank" title="linkedin"><img src="/linkedin.svg" alt="in"/></a>
                        </li>
                        <li>
                          <a href="https://www.producthunt.com/@realvjy" target="__blank" title="producthunt"><img src="/product-hunt.svg" alt="ph"/></a>
                        </li>
                        <li>
                          <a href="https://facebook.com/realvjy" target="__blank" title="facebook"><img src="/facebook.svg" alt="facebook" /></a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/realvjy" target="__blank" title="youtube"><img src="/youtube.svg" alt="youtube" /></a>
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
                <p>Subscribe to the <a href="https://designletter.co" className="blue-link">designletter</a> to get exclusive updates & digital art inspiration in your inbox.</p>

                <div id="mc_embed_signup">
                  <form action="https://designletter.us10.list-manage.com/subscribe/post?u=ac670d4650872310b44fc59b4&amp;id=2728fe6fff" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
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
                          <input type="text" name="b_ac670d4650872310b44fc59b4_2728fe6fff" tabindex="-1" value="" />
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
