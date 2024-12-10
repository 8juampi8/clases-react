const Item = ({product}) => {
    return (
      <div>
          <div className="item">
              <img src={product.img} width={100} alt="" className="image-item" />
              <p className="text-item">{product.name}</p>
              <p className="text-item">Precio: ${product.price}</p>
          </div>
      </div>
    )
  }
  
  export default Item
  