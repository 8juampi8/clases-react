import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const NavBar = () => {

  const {greeting, saludando} = useContext(CartContext)

  const {totalQuantity} = useContext(CartContext)

  return (
    <nav>
        
        <Link to="/">volver</Link>

      <ul>
        <Link to="/category/remeras">Remeras</Link>
        <Link to="/category/pantalones">Pantalones</Link>
        <Link to="/category/zapatillas">Zapatillas</Link>

        <button onClick={saludando}>saludo</button>
        <p>{greeting}</p>

        <Link to={"/cart"}>
          <p>Carrito:{totalQuantity()}</p>
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar
