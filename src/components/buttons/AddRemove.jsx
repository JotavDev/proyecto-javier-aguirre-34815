import React, { useState } from "react";
import "./addRemove.css";
import VerMas from "./VerMas";

function AddRemove({stock , onAddToCart}) {
    const [count, setCount] = useState(1);

    function handleAdd(){
        if (count < stock) setCount(count + 1);
    }

    function handleSubstract(){
        if (count > 1) setCount(count - 1);
    }

    return(
        <div className="addRemove">
            <button onClick={handleSubstract}>-</button>
            <input type="text" value={count}/>
            <button onClick={handleAdd}>+</button>
            <div>
                <button onClick={() => onAddToCart(count) }>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default AddRemove;