import { useState } from "react"

const ItemCount = ({addProductInCart}) => {

  const [count, setCount] = useState(1)

  const handleClickAdd = () => {
    setCount(count+1)
  }

  const handleClickRemove = () => {
    setCount(count-1)
  }

  return (
    <div>
      <button onClick={handleClickRemove}>-</button>
      <p>{count}</p>
      <button onClick={handleClickAdd}>+</button>
      <button onClick={()=>addProductInCart(count)}>Agregar</button>
    </div>
  )
}

export default ItemCount

