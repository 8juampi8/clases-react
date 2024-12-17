import { Link } from "react-router-dom"

const Item = ({product}) => {
    return (
      <div>
          <div className="item">
              <img src={product.img[0]} width={100} alt="" className="image-item" />
              <p className="text-item">{product.name}</p>
              <p className="text-item">Precio: ${product.price}</p>
              <Link to={"/detail/"+product.id}>Ver detalles</Link>
          </div>
      </div>
    )
  }
  
  export default Item
  