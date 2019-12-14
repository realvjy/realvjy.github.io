

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Hero = () => {
    return (
      <>
        <div className="intro-image">
          <img src="/vijay-verma.jpg"/>
        </div>
        <section className="hero">

          <div className="container">
            <div className="hero-wrap">
              <div className="intro-box">
                <div className="intro-txt">
                  <h1>I’m vijay verma.</h1>
                  <h3>Designer, Maker, Dreamer</h3>
                  <p>I'm spending my time cooking <a href="https://medium.com/zomato-technology/zomatos-new-sushi-design-system-d7f4f98664c5" targer="__blank">Sushi</a> and designing cool stuff at <a href="https://zomato.com/" target="__blank">Zomato</a>. When I'm not designing, I love to write code for designers and developers. Please don't explore this portfolio as it contains some of my best <a href="/work" targer="__blank">works.</a></p>
                </div>
                <div className="btns h-btns">
                  <a href="mailto:hello@vijayverma.co?subject=Saying Hello!!!" className="btn btn-outline">Say hi</a><a href="http://bit.ly/2LFfZRu" className="btn btn-outline">Know more</a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </>
    )
}

export default Hero
