/**
 * Working list
 *
 * See: https://vijayverma.co/nfts
 * Date: 8 May, 2021
 *
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import EmailSubs from "./emailsubs.js"


const NFTsList = () => {
    return (
      <section className="work nfts">
        <div className="container">
          <div className="section-info">
            <h1 className="gradient nft">nft.</h1>
            <p>My digital arts are also available to collect from various nft platforms.</p>
            <div className="platform-list">
              <ul>
                <li><a href="https://foundation.com/realvjy" target="__blank"><img src="/foundation.svg"/> foundation</a></li>
                <li><a href="https://rarible.com/realvjy" target="__blank"><img src="/rarible.svg"/> raiable</a></li>
                <li><a href="https://tryshowtime.com/realvjy" target="__blank"><img src="/showtime.svg"/> tryshowtime</a></li>
              </ul>
            </div>
          </div>


          <div className="nft-wrap">

          <div className="nft-box">
            <div className="nft-title">
              <a href="https://foundation.app/realvjy/primitivz-box-000-35730" className="thumb">
                <img src="/nfts/primitivz_box.png"/>
                <div className="nft-sum">
                  <div className="txt">
                    <h5>Foundation <span>•</span> Single</h5>
                    <h2>Primitivz Box #000</h2>
                    <h4>Reserve price <span>0.25 ETH</span></h4>
                  </div>
                </div>
              </a>
            </div>
          </div>

            <div className="nft-box">
              <div className="nft-title">
                <a href="https://foundation.app/realvjy/warrior-girl-35426" className="thumb">
                  <img src="/nfts/warrior-girl.png"/>
                  <div className="nft-sum">
                    <div className="txt">
                      <h5>Foundation <span>•</span> Single</h5>
                      <h2>Warrior Girl</h2>
                      <h4>Reserve price <span>0.15 ETH</span></h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="nft-box">
              <div className="nft-title">
                <a href="https://foundation.app/realvjy/busy-bee-25341" className="thumb">
                  <img src="/nfts/busy-bee.png"/>
                  <div className="nft-sum">
                    <div className="txt">
                      <h5>Foundation <span>•</span> Single</h5>
                      <h2>Busy Bee</h2>
                      <h4>Reserve price <span>0.11 ETH</span></h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
}

export default NFTsList
