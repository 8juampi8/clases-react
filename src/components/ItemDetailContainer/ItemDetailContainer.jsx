import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { getProducts } from "../data/data"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})

  const {idProduct} = useParams()

  useEffect(()=>{
    getProducts()
      .then((data)=> {
        const productFind = data.find((dataProduct) => dataProduct.id == idProduct)
        setProduct(productFind)
      })
  }, [idProduct])

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
