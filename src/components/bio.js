/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
// import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/logo-jihye.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            facebook
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          margin: `auto`,
          minWidth: 100,
          borderRadius: `50%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{
        lineHeight: `1.2`,
      }}>
        <strong>{author}</strong>의<br/> 공부하고 기록하는<br/> 블로그 입니다. <br></br>
        {` `}
        <a style={{
          fontSize: `25px`,
        }} 
          href={`https://www.facebook.com/${social.facebook}`}>
          페이스북
        </a>
      </p>
    </div>
  )
}

export default Bio