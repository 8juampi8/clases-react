import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const {cart, totalPrice, deleteProductById, deleteCart} = useContext(CartContext)

    //early return
    if(cart.length === 0){
        return(
            <div>
                <h2>Opppppps... El carrito se encuentra vacío</h2>
                <Link to="/">Llenar mi carrito</Link>
            </div>
        )
    }
    
  return (
    <>
        <ul>
            {
                cart.map((productCart)=>(
                    <li>
                        <p>{productCart.name}</p>
                        <p>{productCart.quantity}</p>
                        <button onClick={()=>deleteProductById(productCart.id)}>Eliminar</button>
                    </li>
                ))
            }

            <button onClick={deleteCart}>Vaciar carrito</button>
        </ul>

        <h3>{totalPrice()}</h3>
    </>
  )
}

export default Cart
