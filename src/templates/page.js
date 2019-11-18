import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { backgroundColor } = data.sitePage.context;

  return (
      <div style={{ backgroundColor }}>
          <p>Hello Planet</p>
      </div>
  )
}

//export const query = graphql`
//  query($path: String!) {
//    sitePage(path: { eq: $path }) {
//      context {
//        backgroundColor
//      }
//    }
//  }
//`
