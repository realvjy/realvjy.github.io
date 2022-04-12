

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Hero = () => {
    return (
      <>
        <section className="hero">
          <div className="container">
            <div className="hero-wrap">
              <div className="tagline">
                <h1 className="title animated">
                  <span><h3 className="gradient blue">designer.</h3></span>
                  <span><h3 className="gradient pink">maker.</h3></span>
                  <span><h3 className="gradient orange">dreamer.</h3></span>
                  <span><h3 className="gradient yellow">adventurer.</h3></span>
                </h1>
              </div>

              <div className="short-info">
                <p>Hi! I’m <a href="/about">vijay verma</a>. A design wizard voyaging into the metaverse. I tell the story through my design and illustrations. I spent most of my time designing for <a href="/work">brands</a>  and creating open-source design <a href="/work">resources</a>. </p>
              </div>
              <div className="btns">
                <a className="btn" href="mailto:hello@vijayverma.co?subject=Saying Hello!!!">say hello!</a>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default Hero
