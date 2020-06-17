exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsContenido {
        nodes {
          slug
        }
      }
    }
  `)
  // console.log(resultado.data.allDatoCmsHabitacion.nodes);

  if (resultado.errors) {
    reporter.panic("No hubo resultados ", resultado.errors)
  }

  // Si hay paginas, crear los archivos
  const capitulos = resultado.data.allDatoCmsContenido.nodes

  capitulos.forEach(capitulo => {
    actions.createPage({
      path: capitulo.slug,
      component: require.resolve("./src/components/capitulos.js"),
      context: {
        slug: capitulo.slug,
      },
    })
  })
}
