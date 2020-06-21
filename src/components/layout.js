import React from "react"
import { Link } from "gatsby"
import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <>
      <div className="announce-wrapper designletter">
        <div className="container">
          <div className="an-details">
            <p><a href="/designletter" target="_blank">Subscribe to <img src="/designletter-logo.png" /> <span>: A weekly newsletter for designers, developers and managers.</span></a></p>
          </div>
        </div>
      </div>

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
