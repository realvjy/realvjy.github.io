

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Featured = () => {
    return (
      <>
        <section className="featured">
          <div className="container">
          <h4>Featured Project</h4>
          <div className="projects">
            <div className="project-box">
              <div className="p-wrap">
                <img src="bloo.png" className="bloo"/>
                <span className="new-tag">NEW</span>
                <h3>bloouikit.com</h3>
                <p>A large collection of ready to used library to design and prototype your ideas, faster. More than 250+ building blocks with 150+ screen template. Available for Figma, Sketch, XD.</p>
                <a href="https://bloouikit.com/?ref=vijayverma.co" target="_blank">explore here ›</a>
              </div>
            </div>
            <div className="project-box">
              <div className="p-wrap">
                <img src="illlustrations.png" className="illlus"/>
                <h3>illlustrations.co</h3>
                <p>Open source illustrations kit. More than 100+ illustrations to design awesome landing page, mockup and presentations. You can download completely free.</p>
                <a href="http://illlustrations.co/?ref=vijayverma.co" target="_blank">explore here ›</a>
              </div>
            </div>

            <div className="promotion">
              <a href="https://rarible.com/realvjy">
                <img src="nft-illlustrations.jpg" className="web-promo"/>
                <img src="nft-illlustrations-mobile.jpg" className="mobile-promo"/>
              </a>
            </div>
          </div>
          </div>
        </section>
      </>
    )
}

export default Featured
