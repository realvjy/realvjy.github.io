

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
                <a href="https://handkit.design"><img src="/ghost-hand-kit.png" className="tdicons" /></a>
                <span className="new-tag">SOON</span>
                <h3>Ghost Hand Kit</h3>
                <p>A collection of digital hand gestures to elevate your AR/VR designs and mockups with stunning hand gestures! These can also be used for social media, presentations, and video content, in addition to XR.</p>
                <a href="https://twitter.com/realvjy/status/1623284022590992385" target="_blank">Check demo and Signup ›</a>
              </div>
            </div>

            <div className="project-box">
              <div className="p-wrap">
                <a href="http://3dicons.co/?ref=vijayverma.co"><img src="3dicons-cover-2.png" className="tdicons" /></a>
                <h3>3dicons</h3>
                <p>3Dicons is a set of 120+ beautifully crafted open-source icons that have been created in Blender and made available to the community. Under CC0 license, source file FREE. </p>
                <a href="http://3dicons.co/?ref=vijayverma.co" target="_blank">explore here ›</a>
              </div>
            </div>



          </div>
        </div>
      </section>
    </>
  )
}

export default Featured
