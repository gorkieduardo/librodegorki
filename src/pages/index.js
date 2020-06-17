import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContenidoInicio from "../components/contenidoInicio"
import CapituloPreview from "../components/capituloPreview"
import useCapitulos from "../hooks/use-capitulos"

const ListadoCapitulos = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const IndexPage = () => {
  const capitulos = useCapitulos()

  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Contenido
      </h2>

      <ListadoCapitulos>
        {capitulos.map(capitulo => (
          <CapituloPreview key={capitulo.key} capitulo={capitulo} />
        ))}
      </ListadoCapitulos>
    </Layout>
  )
}

export default IndexPage
