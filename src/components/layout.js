/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';

import Hidden from '@material-ui/core/Hidden';

import Header from "./header"
import SEO from "./seo"
import "./layout.css"

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}))

const Layout = ({ children }) => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <>
          <SEO />
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
