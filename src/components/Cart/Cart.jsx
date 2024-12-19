import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {

    const {cart, totalPrice, price} = useContext(CartContext)

  return (
    <>
        <ul>
            {
                cart.map((productCart)=>(
                    <li>
                        <p>{productCart.name}</p>
                        <p>{productCart.quantity}</p>
                    </li>
                ))
            }
        </ul>

        <h3>{totalPrice()}</h3>
    </>
  )
}

export default Cart
