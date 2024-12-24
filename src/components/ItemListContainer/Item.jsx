import { Link } from "react-router-dom"
import React from "react"

const Item = React.memo(({product}) => {

    console.log("re-render de: ", product.name)

    return (
      <div>
          <div className="item">
              <img src={product.img} width={100} alt="" className="image-item" />
              <p className="text-item">{product.name}</p>
              <p className="text-item">Precio: ${product.price}</p>
              <Link to={"/detail/"+product.id}>Ver detalles</Link>
          </div>
      </div>
    )
}, (prevProps, nextProps) => JSON.stringify(prevProps) === JSON.stringify(nextProps))

export default Item
  