import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { getProducts } from "../data/data"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})

  useEffect(()=>{
    getProducts()
      .then((data)=> {
        const productFind = data.find((dataProduct) => dataProduct.id == "Hff556")
        setProduct(productFind)
      })
  }, [])

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
