

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
                <img src="allura.png" className="allura"/>
                <h3>allura illustraion system</h3>
                <p>A collection inspired by people in everyday situations, from days at the office to walks in the park. Exclusively on blush.</p>
                <a href="http://blush.ly/allura" target="_blank">explore here ›</a>
              </div>
            </div>
            <div className="project-box">
              <div className="p-wrap">
                <img src="illlustrations.png" className="illlus"/>
                <h3>illlustraions.co</h3>
                <p>Open source illustrations kit. More than 100+ illustraions to design awesome landing page, mockup and presentations.</p>
                <a href="http://illlustrations.co" target="_blank">explore here ›</a>
              </div>
            </div>
          </div>
          </div>
        </section>
      </>
    )
}

export default Featured
