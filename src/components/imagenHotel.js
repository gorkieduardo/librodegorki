import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  height: 350px;
`
const TextoImagen = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(158, 107, 45, 0.7),
    rgba(167, 103, 60, 0.8)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    margin: 0%;

    @media (min-width: 992px) {
      font-size: 4.8rem;
    }
  }
  p {
    font-size: 2rem;
    @media (min-width: 992px) {
      font-size: 2.6rem;
    }
  }
`

const ImagenHotel = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  // console.log(image.sharp.fluid);

  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextoImagen>
        <h1>Historia de la invasión filibustera a Centroamérica</h1>
        <p>
          Una relato que permite comprender el dinámismo de la histoiria
          nicaragüense
        </p>
      </TextoImagen>
    </ImageBackground>
  )
}

export default ImagenHotel
