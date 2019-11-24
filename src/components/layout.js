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
