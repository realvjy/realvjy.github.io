/**
 * Working list
 *
 * See: https://vijayverma.co/work
 *
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import EmailSubs from "./emailsubs.js"


const WorkList = () => {
    return (
      <section className="work story">
        <div className="container">
          <div className="section-info">
            <h1>story.</h1>
            <p>I like to think of myself as a design-chef who also happens to love sharing the recipes.</p>
          </div>
          <div className="work-wrap ">

            <div className="story-box">
              <div className="story-title">
                <a href="https://medium.com/zomato-technology/zomatos-new-sushi-design-system-d7f4f98664c5" className="article">
                  <h1>Zomato’s new Sushi Design System</h1>
                  <p>All new Zomato design system to create a smooth and amazing experience for our users.</p>
                  <div className="meta">
                    <h4>Sep 10, 2019</h4>
                  </div>
                </a>
              </div>
            </div>

            <div className="story-box">
              <div className="story-title">
                <a href="https://blog.vanila.io/my-design-journey-as-a-product-designer-c6ca991fdc7c" className="article">
                  <h1>Why we switched to Figma as the primary design tool at Zomato</h1>
                  <p>Figma makes it so much easier to design together at Zomato.</p>
                  <div className="meta">
                    <h4>Sep 10, 2019</h4>
                  </div>
                </a>
              </div>
            </div>

            <div className="story-box">
              <div className="story-title">
                <a href="https://blog.vanila.io/my-design-journey-as-a-product-designer-c6ca991fdc7c" className="article">
                  <h1>My design journey as a product designer</h1>
                  <p>A quick story about, how I started my design journey and joined Zomato.</p>
                  <div className="meta">
                    <h4>Dec 28, 2018</h4>
                  </div>
                </a>
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
    )
}

export default WorkList
