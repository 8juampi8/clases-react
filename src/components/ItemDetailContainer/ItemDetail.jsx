import { useState } from "react"
import "./itemdetail.css"

const ItemDetail = ({product}) => {
  const [currentImg, setCurrentimg] = useState(product.img[0])

  const images = product.img.filter((image) => image !== currentImg)

  return (
    <div className="item-detail">
        <div className="images-detail-container">
            <div className="secondary-images">
              {
                images.map((image)=>(
                  <img src={image} key={image} onClick={() => setCurrentimg(image)} />
                ))
              }
            </div>
            <div className="main-image">
                <img src={currentImg} alt="" />
            </div>
        </div>

        <div className="text-detail-container">
            <h2 className="tittle-detail">{product.name}</h2>
            <p className="text-detail">{product.description}</p>
            <p className="text-detail">Precio: ${product.price}</p>
        </div>
    </div>
  )
}

export default ItemDetail
