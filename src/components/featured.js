

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
                <a href="https://twitter.com/lilfrenzgroup"><img src="/lfg-front.png" className="tdicons" /></a>
                <span className="new-tag">SOON</span>
                <h3>Lil Frenz Group</h3>
                <p>A dynamic NFT collection. Lil Frenz started with this idea; Instead of generating random characters, we want to provide our users the ability to customize their PFP like games. </p>
                <a href="https://twitter.com/lilfrenzgroup" target="_blank">Follow the process here ›</a>
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


            <div className="promotion">
              <a href="https://rarible.com/realvjy">
                <img src="nft-illlustrations.jpg" className="web-promo" />
                <img src="nft-illlustrations-mobile.jpg" className="mobile-promo" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Featured
