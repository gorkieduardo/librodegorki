import { graphql, useStaticQuery } from "gatsby"

const useCapitulos = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsContenido {
        nodes {
          titulo
          id
          slug
          capcontenido
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  return data.allDatoCmsContenido.nodes.map(capitulo => ({
    titulo: capitulo.titulo,
    id: capitulo.id,
    capcontenido: capitulo.capcontenido,
    imagen: capitulo.imagen,
    slug: capitulo.slug,
  }))
}

export default useCapitulos
