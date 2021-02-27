

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Worked = () => {
    return (
      <>
        <section className="worked">
          <div className="container">
          <h4>Crafted for</h4>
          <div className="companies">
            <ul>
              <li><img src="/zomato.png"/></li>
              <li><img src="/eversend.png"/></li>
              <li><img src="/feedly.png"/></li>
              <li><img src="/learnapp.png"/></li>
            </ul>
          </div>
          </div>
        </section>
      </>
    )
}

export default Worked
