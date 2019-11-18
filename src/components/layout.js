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


import Header from "./header"
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
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className={classes.offset} />
          <main>{children}</main>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
