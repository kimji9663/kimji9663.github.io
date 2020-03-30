import React, {Fragment} from "react"
import { Link } from "gatsby"
// import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  let main

  if (location.pathname === rootPath) {
    header = (
      <h1 className="mainTitle">
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
    main = (
      <main className="mainBg">{children}</main>
    )
  } else {
    header = (
      <h3 className="subTitle">
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
    main = (
      <main className="subBg">{children}</main>
    )
  }
  return (
    <Fragment>
      <header id="header">
        {header}
        <nav>
          <ul>
            <li>
              <Link to={`/`}>
                INTRO
              </Link>
            </li>
            <li>
              <Link to={`/`}>
                WORK
              </Link>
            </li>
            <li>
              <Link to={`/blog/`}>
                BLOG
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {main}
      <footer id="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Fragment>
  )
}

export default Layout
