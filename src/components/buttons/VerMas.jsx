import "./verMas.css"
import { useState } from "react";

function VerMas(props){

    let [colorBtn, setColorBtn] = useState(props.colorBtn)

    const estilos = {
        borderRadius: "10px",
        color: "white",
        padding: "10px",
        marginBottom: "10px",
        borderColor: "white",
    }

    function handleClick(){
        setColorBtn("#ADD8E5")
    }
    return(
        <>
            <button 
            onClick={props.onTouchButton}
            className="verMas"
            style={props.estilos}>
                <strong>{props.children}</strong>
            </button>
        </>
    )
}

export default VerMas;