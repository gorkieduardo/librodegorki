import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    allDatoCmsContenido(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        capcontenido
        imagen {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const CapitulosTemplate = ({
  data: {
    allDatoCmsContenido: { nodes },
  },
}) => {
  const { titulo,  capcontenido, imagen } = nodes[0]
  return (
    <Layout>
      <main
        css={css`
          margin: 0 auto;
          max-width: 800px;
          width: 95%;
        `}
      >
        <h1
          css={css`
            text-align: center;
            margin-top: 4rem;
          `}
        >
          {titulo}
        </h1>
        <p>{capcontenido}</p>
        <Image fluid={imagen.fluid} />
        <a href="https://www.amazon.com/Eduardo-Estrada/e/B014RN41DM?ref=dbs_a_mng_rwt_scns_share">Ver libros en Amazon</a>
     <br/>
      <a href="gorki.eduardo@gmail.com">email: gorki.edurdo@gmail.com</a>
        
      </main>
    
    </Layout>
  )
}

export default CapitulosTemplate
