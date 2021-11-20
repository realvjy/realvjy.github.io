/**
 * Working list
 *
 * See: https://vijayverma.co/work
 *
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const WorkList = () => {
    return (
      <section className="work">
        <div className="container">
          <div className="section-info">
            <h1 className="gradient blue">work.</h1>
            <p>I put my heart and soul in these projects. Now that you're on this page, feel free to explore.</p>
          </div>
          <div className="work-wrap">

            <div className="work-box">
              <div className="work-title">
                <a href="/zomato" className="thumb">
                  <img src="/work/zomato.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>zomato</h3>
                      <span>—</span>
                      <h4>2018-Now</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="work-box">
              <div className="work-title">
                <a href="https://twitter.com/magikpotions" target="__blank" className="thumb">
                  <img src="/work/magik-potions.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>Magik Potions</h3>
                      <span>—</span>
                      <h4>2021</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="work-box">
              <div className="work-title">
                <a href="http://3dicons.co?ref=vijayverma.co" target="__blank" className="thumb">
                  <img src="/work/3dicons.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>3dicons</h3>
                      <span>—</span>
                      <h4>2021</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="work-box">
              <div className="work-title">
                <a href="/nft" className="thumb">
                  <img src="/work/nft-art.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>NFT Arts</h3>
                      <span>—</span>
                      <h4>2021 - Now</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="work-box">
              <div className="work-title">
                <a href="https://bloouikit.com?ref=vijayverma.co" target="__blank" className="thumb">
                  <img src="/work/bloo-uikit.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>bloo wireframe kit</h3>
                      <span>—</span>
                      <h4>2021</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="work-box">
              <div className="work-title">
                <a href="https://blush.design/collections/allura?ref=vijayverma.co" target="__blank" className="thumb">
                  <img src="/work/allura.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>allura</h3>
                      <span>—</span>
                      <h4>2020</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="work-box">
              <div className="work-title">
                <a href="/mocups" target="__blank" className="thumb">
                  <img src="/work/mocups.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>mocups</h3>
                      <span>—</span>
                      <h4>2020</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>


            <div className="work-box">
              <div className="work-title">
                <a href="https://vijayverma.co/designletter" className="thumb">
                  <img src="/work/designletter.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>designletter</h3>
                      <span>—</span>
                      <h4>2020</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="https://blush.design/collections/croods" target="__blank" className="thumb">
                  <img src="/work/croods.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>croods</h3>
                      <span>—</span>
                      <h4>2020</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="https://contrauikit.com?ref=vijayverma.co" target="__blank" className="thumb">
                  <img src="/work/contra-kit.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>contra wireframe kit</h3>
                      <span>—</span>
                      <h4>2020</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="https://vijayverma.co/illlustrations" target="__blank" className="thumb">
                  <img src="/work/illlustrations.gif"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>illlustrations</h3>
                      <span>—</span>
                      <h4>2019</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>



            <div className="work-box">
              <div className="work-title">
                <a href="/sushi" className="thumb">
                  <img src="/work/sushi.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>sushi design system</h3>
                      <span>—</span>
                      <h4>2019</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="https://vijayverma.co/uiprint" target="__blank" className="thumb">
                  <img src="/work/uiprint.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>uiprint</h3>
                      <span>—</span>
                      <h4>2019</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>



            <div className="work-box">
              <div className="work-title">
                <a href="https://dribbble.com/uigate" target="__blank" className="thumb">
                  <img src="/work/uigate.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>uigate studio</h3>
                      <span>—</span>
                      <h4>2019-now</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="https://vijayverma.co/uilogos" target="__blank" className="thumb">
                  <img src="/work/uilogos.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>uilogos</h3>
                      <span>—</span>
                      <h4>2018</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="/eversend" className="thumb">
                  <img src="/work/eversend.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>eversend</h3>
                      <span>—</span>
                      <h4>2017</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="https://instagram.com/uihues" target="__blank" className="thumb">
                  <img src="/work/uihues.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>uihues</h3>
                      <span>—</span>
                      <h4>2018</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="https://learnapp.co" target="__blank" className="thumb">
                  <img src="/work/learnapp.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>learnapp</h3>
                      <span>—</span>
                      <h4>2018</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="https://feedly.com" target="__blank" className="thumb">
                  <img src="/work/feedly.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>feedly</h3>
                      <span>—</span>
                      <h4>2017</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="https://zusedigital.com/" target="__blank" className="thumb">
                  <img src="/work/zuse.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>zuse digital</h3>
                      <span>—</span>
                      <h4>2017</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="https://vijayverma.co/maker-of-this" target="__blank" className="thumb">
                  <img src="/work/maker.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>maker of this</h3>
                      <span>—</span>
                      <h4>coming soon</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="#" target="__blank" className="thumb">
                  <img src="/work/leafss.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>project leaf</h3>
                      <span>—</span>
                      <h4>coming soon</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="#" target="__blank" className="thumb">
                  <img src="/work/odh.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>open design hub</h3>
                      <span>—</span>
                      <h4>coming soon</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="https://vijayverma.co/uischool" target="__blank" className="thumb">
                  <img src="/work/uixool.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>uixool</h3>
                      <span>—</span>
                      <h4>coming soon</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="https://dribbble.com/realvjy" target="__blank" className="thumb">
                  <img src="/work/other.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>on dribbble</h3>
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

export default WorkList
