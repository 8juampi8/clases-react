import { createContext, useState } from "react"

const CartContext = createContext()

const greeting = "Hola"

const saludando = () => {
    alert("Saludando desde mi Context")
}

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addProduct = (newProduct) => {
        setCart([...cart, newProduct])
    }

    console.log(cart)

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart)=>total+productCart.quantity, 0)
    }

    const totalPrice = () => {
        const price = cart.reduce((total, productCart) => total+ (productCart.quantity * productCart.price), 0)
    }

    return(
        <CartContext.Provider value={{greeting, saludando, cart, addProduct, totalQuantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}