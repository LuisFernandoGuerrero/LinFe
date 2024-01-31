import Servicio from "./servicio";

const ServiciosContenedor = ({ servicios }) => {
  /*    const serviciosOrdenados = servicios.sort((a, b) => {
          if (a.id < b.id) {
              return -1;
          } else if (a.id < b.id) {
              return 1;
          } else {
              return 0;
          }
      })
  */
  return (
    <>
      {servicios.map(servicio => (
        <Servicio
          key={servicio?.id}
          servicio={servicio}
        />
      ))}
    </>
  )
}

export default ServiciosContenedor

/*
  [
    {
      id: 2,
      attributes: {
        nombre: 'Diseño de Software',
        descripcion: 
          'Nuestro equipo de diseñadores es experto crear soluciones personalizadas para cada uno de nuestros clientes, Si buscar optimizar procesos, mejor eficiencia y obtener excelentes resultados, estás en el lugar correcto.',
        createdAt: '2023-06-02T02:23:15.524Z',
        updatedAt: '2023-06-02T02:23:23.866Z',
        publishedAt: '2023-06-02T02:23:23.543Z',
        url: 'diseno',
        imagen: {
          data: {
            id: 8,
            attributes: {
              name: 'servicioDiseño.svg',
              alternativeText: null,
              caption: null,
              width: 48,
              height: 48,
              formats: null,
              hash: 'servicio_Diseno_d3863c6d59',
              ext: '.svg',
              mime: 'image/svg+xml',
              size: 0.44,
              url: 'https://res.cloudinary.com/dxxb40hv1/image/upload/v1685672587/servicio_Diseno_d3863c6d59.svg',
              previewUrl: null,
              provider: 'cloudinary',
              provider_metadata: { public_id: 'servicio_Diseno_d3863c6d59', resource_type: 'image' },
              createdAt: '2023-06-02T02:23:07.886Z',
              updatedAt: '2023-06-02T02:23:07.886Z'
            }
          }
        }
      }
    }, {
      id: 3,
      attributes: {
        nombre: 'SEO',
        descripcion: 
          'Nuestro servicio de SEO te hace más visible a la hora de buscar tus servicios en la web, se debe tener una estructura valida y limpia en el código de tu web, si tu objetivo es aumentar tus ventas junto a la visibilidad, estás en el lugar correcto. ',
        createdAt: '2023-06-02T02:40:56.895Z',
        updatedAt: '2023-06-02T02:41:06.073Z',
        publishedAt: '2023-06-02T02:41:05.696Z',
        url: 'seo',
        imagen: {
          data: {
            id: 9,
            attributes: {
              name: 'servicioSEO.svg',
              alternativeText: null,
              caption: null,
              width: 24,
              height: 24,
              formats: null,
              hash: 'servicio_SEO_451922ffab',
              ext: '.svg',
              mime: 'image/svg+xml',
              size: 0.31,
              url: 'https://res.cloudinary.com/dxxb40hv1/image/upload/v1685673539/servicio_SEO_451922ffab.svg',
              previewUrl: null,
              provider: 'cloudinary',
              provider_metadata: { public_id: 'servicio_SEO_451922ffab', resource_type: 'image' },
              createdAt: '2023-06-02T02:38:59.906Z',
              updatedAt: '2023-06-02T02:38:59.906Z'
            }
          }
        }
      }
    },
    {
      id: 1,
      attributes: {
        nombre: 'Desarrollo Web',
        descripcion: 
          'Nuestro equipo experto en desarrollo web se encargará de satisfacer tus necesidades para que estés presente en la red y vendas tus servicios por internet, si quieres crecer tu empresa o negocio personal, estás en el lugar correcto. ',
        createdAt: '2023-06-02T01:48:25.937Z',
        updatedAt: '2023-06-02T03:25:27.980Z',
        publishedAt: '2023-06-02T01:48:35.434Z',
        url: 'desarrollo-web',
        imagen: {
          data: {
            id: 7,
            attributes: {
              name: 'servicioDesarrollo.svg',
              alternativeText: null,
              caption: null,
              width: 48,
              height: 48,
              formats: null,
              hash: 'servicio_Desarrollo_232312fe36',
              ext: '.svg',
              mime: 'image/svg+xml',
              size: 0.21,
              url: 'https://res.cloudinary.com/dxxb40hv1/image/upload/v1685670497/servicio_Desarrollo_232312fe36.svg',
              previewUrl: null,
              provider: 'cloudinary',
              provider_metadata: { public_id: 'servicio_Desarrollo_232312fe36', resource_type: 'image' },
              createdAt: '2023-06-02T01:48:18.214Z',
              updatedAt: '2023-06-02T01:48:18.214Z'
            }
          }
        }
      }
    },
    
  ]
*/