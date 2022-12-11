import React from "react";
import "./checkout.css";
import { useParams } from "react-router-dom";
import VerMas from "../buttons/VerMas"
import { Link } from "react-router-dom";

function Checkout(){
    const idOrder = useParams().idOrder;
    return (
        <div className="checkoutContainer">
            <div className="checkout">
                <img className="successIcon" src="https://i.imgur.com/kE3KCKR.png" alt="Success icon" />
                <h1>¡Gracias por tu compra!</h1>
                <h4>Recibirás por correo electrónico los datos de tu pedido. <br/>El código de tu compra es: {idOrder}</h4>
                <Link to="/proyecto-javier-aguirre-34815/">
                    <VerMas estilos={{marginTop: "25px"}}>
                        Volver al home
                    </VerMas>
                </Link>
            </div>
        </div>
    )
}

export default Checkout;