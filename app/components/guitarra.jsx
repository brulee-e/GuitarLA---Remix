import { Link } from '@remix-run/react'

function Guitarra({guitarra}) {

    const { descripcion, imagen, precio, url, nombre} = guitarra
  return (
    <div className="guitarra">
        <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`}/>
        <div className="contenido">
            <h3>{nombre}</h3>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">${precio}</p>
        </div>

        <Link className='enlace' to={`/guitarras/${url}`}>Ver producto</Link>
    </div>
  )
}

export default Guitarra