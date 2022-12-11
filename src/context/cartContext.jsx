import { createContext , useState, useEffect } from "react";

export const cartContext = createContext({cart: []})

export function CartContextProvider({children}){
    const [cart, setCart] = useState([])

    const saveInLocalStorage = (array) => {
        localStorage.setItem("cart", JSON.stringify(array));
    };

    const recoveryLocalStorage = () => {
        if(localStorage.getItem("cart")){
            let newCart = [...cart];
            let recoveryCart = JSON.parse(localStorage.getItem("cart"));

            recoveryCart.forEach((item) => {
                newCart.push(item);
                setCart(newCart);
            });
        };
    }

    useEffect(() => {
        recoveryLocalStorage();
    }, []);

    const [itemCount, setItemCount] = useState(false);

    function addToCart(product, count){
        let itemAlreadyInCart = cart.findIndex(
            (itemInCart) => itemInCart.id === product.id
        );
      
        let newCart = [...cart];
        if (itemAlreadyInCart !== -1) {
            let amount = newCart[itemAlreadyInCart].count;
            if ((amount += count) > newCart[itemAlreadyInCart].stock) {
              setItemCount((prevItemCount) => (prevItemCount = true));
            } else {
              newCart[itemAlreadyInCart].count += count;
              setItemCount(false);
              setCart(newCart);
              saveInLocalStorage(cart);
            }
        } else {
            product.count = count;
            newCart.push(product);
            setItemCount(false);
            setCart(newCart);
            saveInLocalStorage(cart);
        }
    }

    let total = 0;

    function itemsInCart(){
        let total = 0;
        cart.forEach((item) => (total = total + item.count));
        return total;
    }

    function removeItem(removeItem, item){
        let idItem = removeItem;
        let newCart = cart.filter((item) => item.id !== idItem);

        setCart(newCart);
        saveInLocalStorage(newCart);
    }

    function clear(){
        setCart([]);
        saveInLocalStorage([]);
    }

    return(
        <cartContext.Provider value={{
            cart, 
            addToCart, 
            itemsInCart, 
            removeItem, 
            clear, 
            setCart,
            saveInLocalStorage,
            itemCount,
            }}
        >
            {children}
        </cartContext.Provider>
    )
}