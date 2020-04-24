import React, {Fragment} from "react"
import { Link } from "gatsby"
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
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
        <div className="sec01"></div>
        <div id="trigger2" className="trigger2"></div>
        <Controller>
          <Scene 
           triggerElement="#trigger2"
           duration={1}
          >
            {(progress) => (
                <Tween
                from={{
                css: {background: 'transparent'},
                ease: 'linear'}
                }
                to={{
                css: {background: 'rgba(255,255,255,.5)', borderBottom: 'none'},
                ease: 'linear'}
                }
                totalProgress={progress}
                paused
                >
                    <div className="titleWrap">
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
                    </div>
                </Tween>
            )}
          </Scene>
        </Controller>
        <div className="sec02"></div>
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
