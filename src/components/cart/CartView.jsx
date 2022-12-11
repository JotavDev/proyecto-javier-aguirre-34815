import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import VerMas from "../buttons/VerMas";
import { createOrder } from "../services/firestore";
import { useNavigate } from "react-router-dom";
import CartForm from "./CartForm";
import CarritoVacio from "./CarritoVacio";
import "./cartView.css";

function CartView(){
    const { cart, removeItem, clear } = useContext(cartContext);
    const navigate = useNavigate()

    if(cart.length === 0) return <CarritoVacio/>;

    async function handleCheckout(evt, data){
        const order = {
            buyer: data,
            items: cart,
            total: 0,
            date: new Date(),
        };
        const orderId = await createOrder(order);
        navigate(`/thankyou/${orderId}`)
    }

    return(
        <div className="generadorCardsCarrito">
            {cart.map( item =>  (
                <div className="cartContainer">
                    <div key={item.id} className="resumeContainer">
                        <img className="imagenCarrito" src={item.imageUrl} alt="" />
                        <div className="textosCarrito">
                            <h2 style={{margin: "0", fontSize: "35px"}}>{item.title}</h2>
                            <h4>${item.price}</h4>
                        </div>
                    </div>
                    <div className="cantidad">
                        <h2>{item.count}</h2>
                    </div>
                    <div className="removerItem">
                        <VerMas estilos={{width: "50%", height: "25%"}} onTouchButton={() => removeItem(item.id)}>X</VerMas>
                    </div>
                </div>
            ))}
            <CartForm onSubmit={handleCheckout}/>
            <VerMas estilos={{marginTop: "25px"}} onTouchButton={() => clear()}>Vaciar carrito</VerMas>
        </div>
    )
}

export default CartView