/**
 * Working list
 *
 * See: https://vijayverma.co/work
 *
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const WorkList = () => {
    return (
      <section className="work story">
        <div className="container">
          <div className="section-info">
            <h1>story.</h1>
            <p>Sometime I wrote about how hard it is to cook design.</p>
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
              <h1>Get design receipe from master chef</h1>
              <p>Subscribe to newsletter to get updates and digital art inspiration from me</p>
              <form className="newsletter">
                <input type="text" id="fname" name="firstname" placeholder="Email address please" className="email"/>
                <button>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default WorkList
