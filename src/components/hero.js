

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
                <p>Hi! I’m <a href="/contact">vijay verma</a>. For more than 1000+ year, I’ve been spending my time cooking <a href="/sushi">sushi</a> and designing cool stuff at <a href="#">zomato</a>. In my free time, I craft some cool <a href="#">resources</a> for designers, developers and aliens 👽.</p>
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
