import React from "react"
import { Link } from "gatsby"
import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let announce = (
      <>
        <div className="announce-wrapper release">
          <div className="container">
            <h2>Released latest version at <a href="https://vjy.me">vjy.me</a></h2>
          </div>
        </div>
      </>
    )
    return (
      <div>
        <div>{announce}</div>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
