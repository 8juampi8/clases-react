import "./itemdetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({product}) => {

  const [showItemCount, setShowItemCount] = useState(true)

  const {addProduct} = useContext(CartContext)

  const addProductInCart = (count) => {
    const productCart = {...product, quantity: count}

    addProduct(productCart)

    setShowItemCount(false)
  }

  return (
    <div className="item-detail">
        <div className="images-detail-container">
            <div className="main-image">
                <img src={product.img} alt="" />
            </div>
        </div>

        <div className="text-detail-container">
            <h2 className="tittle-detail">{product.name}</h2>
            <p className="text-detail">{product.description}</p>
            <p className="text-detail">Precio: ${product.price}</p>

            {
              showItemCount === true ? (
                <ItemCount addProductInCart={addProductInCart}/>
              ) : (<Link to={"/cart"}>Terminar la compra</Link>)
            }
        </div>
    </div>
  )
}

export default ItemDetail

