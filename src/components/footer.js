

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Footer = () => {
    return (
      <section className="footer">
        <div className="container">
          <div className="footer-wrap">
            <div className="credit">
              <h4>© vijay verma, {new Date().getFullYear() } <a href="/version/v3">...</a></h4>
            </div>
            <div className="quote">
              <h4>stay hungry, stay foolish</h4>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Footer
