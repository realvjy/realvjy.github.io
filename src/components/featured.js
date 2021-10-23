

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
                <a href="http://3dicons.co/?ref=vijayverma.co"><img src="3dicons-cover-2.png" className="tdicons"/></a>
                <span className="new-tag">NEW</span>
                <h3>3dicons</h3>
                <p>3Dicons is a set of 120+ beautifully crafted open-source icons that have been created in Blender and made available to the community. Under CC0 license, source file FREE. </p>
                <a href="http://3dicons.co/?ref=vijayverma.co" target="_blank">explore here ›</a>
              </div>
            </div>
            <div className="project-box">
              <div className="p-wrap">
                <a href="http://illlustrations.co/?ref=vijayverma.co"><img src="illlustrations.png" className="illlus"/></a>
                <h3>illlustrations</h3>
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
