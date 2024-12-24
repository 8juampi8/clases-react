import ItemList from "./ItemList.jsx"
import HocFilterProducts from "../../hoc/HocFilterProducts.jsx"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"
import { useEffect, useState } from "react"
import { getProducts } from "../data/data.js"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect(()=> {
        setProducts(
            [
                {
                    id: "Grt223",
                    name: "Remera Extreme",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate at, rem iste quia magnam assumenda. Consequatur voluptas beatae ex dolorum dolor sapiente, ipsa est nobis voluptate, odit odio harum quae.",
                    price: 400,
                    stock: 10,
                    image: ["/img/remera-h.jpg", "/img/remera-h.jpg", "/img/remera-h.jpg"],
                    category: "remeras"
                  },
                  {
                    id: "Grt224",
                    name: "Remera Fitz Roy",
                    description: "",
                    price: 420,
                    stock: 4,
                    image: ["/img/remera-m.jpg", "/img/remera-m.jpg", "/img/remera-m.jpg"],
                    category: "remeras"
                  },
                  {
                    id: "Hff556",
                    name: "Pantalon Dorian",
                    description: "",
                    price: 820,
                    stock: 5,
                    image: ["/img/pantalon-h.jpg", "/img/pantalon-h.jpg", "/img/pantalon-h.jpg"],
                    category: "pantalones"
                  }
            ]
        )
    }, [] )

    return(
        <div className="itemlistcontainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

const ItemListContainerWithHoc = HocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc