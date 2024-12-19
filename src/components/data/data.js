const products = [
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
      price: 720,
      stock: 5,
      image: ["/img/pantalon-h.jpg", "/img/pantalon-h.jpg", "/img/pantalon-h.jpg"],
      category: "pantalones"
    },
    {
      id: "Hff557",
      name: "Pantalon Ambar",
      description: "",
      price: 620,
      stock: 17,
      image: ["/img/pantalon-m.jpg", "/img/pantalon-m.jpg", "/img/pantalon-m.jpg"],
      category: "pantalones"
    },
    {
      id: "Wre442",
      name: "Zapatillas Cloudfield",
      description: "",
      price: 800,
      stock: 2,
      image: ["/img/zapatillas-m.jpg", "/img/zapatillas-m.jpg", "/img/zapatillas-m.jpg"],
      category: "zapatillas"
    },
    {
      id: "Wre443",
      name: "Zapatillas Space",
      description: "",
      price: 820,
      stock: 6,
      image: ["/img/zapatillas-h.jpg", "/img/zapatillas-h.jpg", "/img/zapatillas-h.jpg"],
      category: "zapatillas"
    },
  ]

const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
          resolve(products)
        }, 2000)
 
    })
}

export {getProducts}