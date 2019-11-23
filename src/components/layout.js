import React from "react"
import { Link } from "gatsby"
import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <>
      <div className="announce-wrapper skillshare">
        <div className="container">
          <div className="an-details">
          </div>
        </div>
      </div>
      <section className="header_section">
        <div className="container">
          <nav>
            <Link to={`/`} className="brand">
              <img src="/realvjy.svg" className="logo" />
            </Link>
            <div className="menu">
              <ul className="menu-links">
                <li>
                  <a href="https://medium.com/@realvjy">story.</a>
                </li>
                <li className="active">
                  <a href="https://dribbble.com/realvjy">work.</a>
                </li>
                <li>
                  <a href="#">contact.</a>
                </li>
              </ul>
              <ul className="menu-social">
                <li>
                  <a href="https://instagram.com/realvjy" target="__blank"><img src="/insta.svg"/></a>
                </li>
                <li>
                  <a href="https://twitter.com/realvjy" target="__blank"><img src="/twitter.svg"/></a>
                </li>
                <li>
                  <a href="https://facebook.com/realvjy" target="__blank"><img src="/facebook.svg"/></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      </>
    )
    return (
      <div>
        <header>{header}</header>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
