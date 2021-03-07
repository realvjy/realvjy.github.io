

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Worked = () => {
    return (
      <>
        <section className="worked">
          <div className="container">
          <h4>Crafted for</h4>
          <a href="/work" className="companies">
            <h3 className="gradient pink"> and many more.</h3>
            <ul>
              <li><img src="/zomato.png"/></li>
              <li><img src="/eversend.png"/></li>
              <li><img src="/feedly.png"/></li>
              <li><img src="/learnapp.png"/></li>
            </ul>
          </a>
          </div>
        </section>
      </>
    )
}

export default Worked
