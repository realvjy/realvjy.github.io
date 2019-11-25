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
            <h1>work.</h1>
            <p>I put my heart and soul in these projects. Now that you're on this page, feel free to explore.</p>
          </div>
          <div className="work-wrap">

            <div className="work-box">
              <div className="work-title">
                <a href="https://zomato.com" target="__blank" className="thumb">
                  <img src="/work/zomato.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>Zomato</h3>
                      <span>—</span>
                      <h4>2018-Now</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="https://illlustrations.co" target="__blank" className="thumb">
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
                <a href="https://uiprint.co" target="__blank" className="thumb">
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
                <a href="https://medium.com/zomato-technology/zomatos-new-sushi-design-system-d7f4f98664c5" target="__blank" className="thumb">
                  <img src="/work/sushi.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>Sushi Design System</h3>
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
                <a href="https://uilogos.co" target="__blank" className="thumb">
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
                <a href="https://eversend.co" target="__blank" className="thumb">
                  <img src="/work/eversend.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>Eversend</h3>
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
                <a href="#" target="__blank" className="thumb">
                  <img src="/work/maker.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>Project maker</h3>
                      <span>—</span>
                      <h4>Coming Soon</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="work-box">
              <div className="work-title">
                <a href="https://uischool.co" target="__blank" className="thumb">
                  <img src="/work/uischool.png"/>
                  <div className="work-sum">
                    <div className="txt">
                      <h3>Uischool</h3>
                      <span>—</span>
                      <h4>Coming Soon</h4>
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
