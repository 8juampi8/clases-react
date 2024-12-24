import { createContext, useEffect, useState } from "react"

const CartContext = createContext()

const greeting = "Hola"

const saludando = () => {
    alert("Saludando desde mi Context")
}

const CartProvider = ({children}) => {

    const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"))
    const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : [])

    useEffect(()=>{
        localStorage.setItem("cart-ecommerce", JSON.stringify(cart))
    }, [cart])

    const addProduct = (newProduct) => {
        const index = cart.findIndex((productCart)=>productCart.id===newProduct.id)
        if(index===-1){
            //agregar el producto como nuevo
            setCart([...cart, newProduct])
        }else{
            //modificar la cantidad del producto
            const newCart = [...cart]
            newCart[index].quantity = newCart[index].quantity + newProduct.quantity
            setCart[newCart]
        }
    }

    console.log(cart)

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart)=>total+productCart.quantity, 0)
    }

    const totalPrice = () => {
        const price = cart.reduce((total, productCart) => total+ (productCart.quantity * productCart.price), 0)
    }

    const deleteProductById = (idProduct) => {
        const filterProducts = cart.filter((productCart) => productCart.id !== idProduct)
        setCart(filterProducts)
    }

    const deleteCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{greeting, saludando, cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}