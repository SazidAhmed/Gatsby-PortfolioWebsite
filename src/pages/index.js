import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout"
import styles from '../styles/home.module.css'
import Img from "gatsby-image"

export default function Home({ data }) {

  const { title, tagline, contact } = data.site.siteMetadata;
  let  photo = data.file.childImageSharp.fluid;

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>{ title }</h2>
          <h3>{ tagline }</h3>
          <p>{ contact }</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <Img fluid={ photo } />
      </section>
    </Layout>
  )
}

export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
      title
      contact
      tagline
    }
  }
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`