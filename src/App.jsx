import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {

  return (
    <div>
      <ItemListContainer greeting={"Bienvenidos a mi ecommerce"} />

      <ItemDetailContainer />
    </div>
  )
}

export default App
