import "./addRemove.css";
import React from "react";
import products from "../../Products";

function AddRemove(props) {
    let [count, setCount] = React.useState(1);

    function handleAdd(){
        if (count < props.stock) setCount(count + 1);
    }

    function handleRemove(){
        if (count > 0 ) setCount(count - 1);
    }

    return (
        <div className="addRemove">
            <button onClick={handleRemove}>-</button>
            <input type="text" value={count}/>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

export default AddRemove;