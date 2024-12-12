import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        
        <Link to="/">volver</Link>

      <ul>
        <Link to="/category/remeras">Remeras</Link>
        <Link to="/category/pantalones">Pantalones</Link>
        <Link to="/category/zapatillas">Zapatillas</Link>
      </ul>
    </nav>
  )
}

export default NavBar
