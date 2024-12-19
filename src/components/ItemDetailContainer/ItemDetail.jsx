import "./itemdetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({product}) => {

  const {addProduct} = useContext(CartContext)

  const addProductInCart = (count) => {
    const productCart = {...product, quantity: count}

    addProduct(productCart)
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
        </div>

        <ItemCount addProductInCart={addProductInCart}/>
    </div>
  )
}

export default ItemDetail

