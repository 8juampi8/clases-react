import './App.css'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EjemploContadorEventListener from './components/EjemploContadorEventListener'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <div className='container-app'>

      <BrowserRouter>   

        <CartProvider>

        <NavBar />  
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi Ecommerce"/>} />
          <Route path='/category/:idCategory' element={<ItemListContainer greeting="Bienvenidos a mi Ecommerce"/>} />
          <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

        </CartProvider>

      </BrowserRouter>

      <EjemploContadorEventListener />

    </div>
  )
}

export default App
