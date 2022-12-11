import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext"
import './cartwidget.css'
import { Link } from "react-router-dom";

function CartWidget({counter}){

    const contexto = useContext(cartContext);

    return (
        <div>
            <Link to="/cart">
                <img className="cartIcon" src="https://i.imgur.com/bDjCq9f.png" alt="Logo carrito" />
                <sub>{ contexto.itemsInCart() }</sub>
            </Link>
        </div>
    )
}

export default CartWidget