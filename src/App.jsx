import './App.css'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EjemploContadorEventListener from './components/EjemploContadorEventListener'

function App() {

  return (
    <div className='container-app'>

      <BrowserRouter>   

        <NavBar />  
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi Ecommerce"/>} />
          <Route path='/category/:idCategory' element={<ItemListContainer greeting="Bienvenidos a mi Ecommerce"/>} />
          <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
        </Routes>

      </BrowserRouter>

      <EjemploContadorEventListener />

    </div>
  )
}

export default App
