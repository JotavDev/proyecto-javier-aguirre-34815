import { createContext , useState } from "react";

export const cartContext = createContext({cart: []})

export function CartContextProvider(props){

    const [cart, setCart] = useState([])

    function addToCart(product, count){
        let itemAlreadyInCart = cart.findIndex((itemInCart) => itemInCart.id === product.id )
        let newCart = [...cart];

        if(itemAlreadyInCart !== -1){
            newCart[itemAlreadyInCart].count += count;
            setCart(newCart)
        } else {
            product.count = count;
            newCart.push(product)
            setCart(newCart)
        }
    }

    function clear(){
        alert("Carrito limpio")
    }

    function removeItem(idRemove){
        const newCart = [...cart];
        newCart.pop();
        setCart(newCart);
    }

    function priceInCart(){
        let totalPrice = 0;
        cart.forEach((producto) => (totalPrice = totalPrice + (producto.price*producto.cantidad)))
        return totalPrice;
    }

    function itemsInCart(){
        let total = 0;
        cart.forEach((itemInCart) => (total = total + itemInCart.count))
        return total;
    }


    return(
        <cartContext.Provider value={ {cart, addToCart, itemsInCart, removeItem, clear, priceInCart} }>
            {props.children}
        </cartContext.Provider>
    )
}