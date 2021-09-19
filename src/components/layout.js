import React from "react"
import { Link } from "gatsby"
import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let announce = (
      <>
      <div className="announce-wrapper designletter">
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
