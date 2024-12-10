import ItemList from "./ItemList.jsx"
import HocFilterProducts from "../../hoc/HocFilterProducts.jsx"
import "./itemlistcontainer.css"

const ItemListContainer = ({greeting, products}) => {

    return(
        <div className="itemlistcontainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

const ItemListContainerWithHoc = HocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc