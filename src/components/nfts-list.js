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
          <h1 className="gradient nft">NFTs.</h1>
          <p>My digital arts are also available to collect from various nft platforms.</p>
          <div className="platform-list">
            <ul>
              <li><a href="https://foundation.app/realvjy" target="__blank"><img src="/foundation.svg" /> foundation</a></li>
              <li><a href="https://rarible.com/realvjy" target="__blank"><img src="/rarible.svg" /> rarible</a></li>
              <li><a href="https://opensea.io/accounts/realvjy" target="__blank"><img src="/opensea.svg" /> opensea</a></li>
              <li><a href="https://tryshowtime.com/realvjy" target="__blank"><img src="/showtime.svg" /> tryshowtime</a></li>
            </ul>
          </div>
        </div>


        <div className="nft-wrap">
          <div className="nft-box">
            <div className="nft-title">
              <a href="https://twitter.com/lilfrenzgroup" className="thumb">
                <img src="/lfg-front.png" />
                <div className="nft-sum">
                  <div className="txt">
                    <h5>Dynamic NFT collection</h5>
                    <h2>Lil Frenz Group</h2>
                    <h4>Soon</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="nft-box">
            <div className="nft-title">
              <a href="https://twitter.com/realvjy" className="thumb">
                <img src="/nfts/figish.png" />
                <div className="nft-sum">
                  <div className="txt">
                    <h5>1/1</h5>
                    <h2>Figish</h2>
                    <h4>TBA</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="nft-box">
            <div className="nft-title">
              <a href="https://twitter.com/magikpotions" className="thumb">
                <img src="/nfts/magikpotions-banner.png" />
                <div className="nft-sum">
                  <div className="txt">
                    <h5>1117 Editons</h5>
                    <h2>Magik Potions</h2>
                    <h4>TBA</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="nft-box">
            <div className="nft-title">
              <a href="https://foundation.app/@realvjy/design-potion-56042" className="thumb">
                <img src="/nfts/design-potion.png" />
                <div className="nft-sum">
                  <div className="txt">
                    <h5>Foundation <span>•</span> Single</h5>
                    <h2>Design Potion</h2>
                    <h4>Sold <span>0.33 ETH</span></h4>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="nft-box">
            <div className="nft-title">
              <a href="https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:602598?tab=owners" className="thumb">
                <img src="/nfts/rainbow.png" />
                <div className="nft-sum">
                  <div className="txt">
                    <h5>Rarible <span>•</span> Single</h5>
                    <h2>Primitivz #5 "Rainbow"</h2>
                    <h4>On Auction <span>0.11 ETH</span></h4>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="nft-box">
            <div className="nft-title">
              <a href="https://rarible.com/token/0x60f80121c31a0d46b5279700f9df786054aa5ee5:1037516?tab=bids" className="thumb">
                <img src="/nfts/sporty.png" />
                <div className="nft-sum">
                  <div className="txt">
                    <h5>Rarible <span>•</span> Single</h5>
                    <h2>Primitivz #4 "sporty"</h2>
                    <h4>On Auction <span>0.11 ETH</span></h4>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="nft-box">
            <div className="nft-title">
              <a href="https://rarible.com/token/0x60f80121c31a0d46b5279700f9df786054aa5ee5:1017824:0x2d5a7bcd873a5f8a80433a45647cfcf7947779bc?tab=bids" className="thumb">
                <img src="/nfts/skully_003.png" />
                <div className="nft-sum">
                  <div className="txt">
                    <h5>Rarible <span>•</span> Single</h5>
                    <h2>Primitivz #3 "Skully"</h2>
                    <h4>On Auction <span>0.1 ETH</span></h4>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="nft-box">
            <div className="nft-title">
              <a href="https://rarible.com/token/0x60f80121c31a0d46b5279700f9df786054aa5ee5:996625:0x90fa47e64c359e2476f548a95ba1d9d7956185e2?tab=details" className="thumb">
                <img src="/nfts/cutie_002.png" />
                <div className="nft-sum">
                  <div className="txt">
                    <h5>Rarible <span>•</span> Single</h5>
                    <h2>Primitivz #2 "Cutie"</h2>
                    <h4>Sold <span>0.1 ETH</span></h4>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="nft-box">
            <div className="nft-title">
              <a href="https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:561553:0x2d5a7bcd873a5f8a80433a45647cfcf7947779bc?tab=details" className="thumb">
                <img src="/nfts/robo_1106.png" />
                <div className="nft-sum">
                  <div className="txt">
                    <h5>Rarible <span>•</span> 10 Edition</h5>
                    <h2>Primitivz #1 "Robo"</h2>
                    <h4>On Sale <span>0.02 ETH</span></h4>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="nft-box">
            <div className="nft-title">
              <a href="https://foundation.app/realvjy/primitivz-box-000-35730" className="thumb">
                <img src="/nfts/primitivz_box.png" />
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
                <img src="/nfts/warrior-girl.png" />
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
                <img src="/nfts/busy-bee.png" />
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
