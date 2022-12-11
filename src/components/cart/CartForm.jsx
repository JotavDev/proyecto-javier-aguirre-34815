import React, { useState } from "react";
import VerMas from "../buttons/VerMas";
import "./cartForm.css";

export default function CartForm(props){
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    })

    function onInputChange(evt){
        let nameInput = evt.target.name;
        let value = evt.target.value;
        let newData = {...data};
        newData[nameInput] = value;
        setData(newData)
    }

    function onSubmit(evt){
        evt.preventDefault();
        props.onSubmit(evt, data);
    }

    return(
        <div className="formDataContainer">
            <form className="formData" onSubmit={onSubmit}>
                <div className="contentInLine" style={{ display: "flex", marginBottom: 8}}>
                    <label className="inputName" htmlFor="name" style={{ width: "100px", marginRight: 4}}>Nombre*</label>
                    <input className="inputForm" required value={data.name} name="name" type="text" onChange={onInputChange} />
                </div>

                <div className="contentInLine" style={{ display: "flex", marginBottom: 8}}>
                    <label className="inputName" htmlFor="email" style={{ width: "100px", marginRight: 4}}>Email*</label>
                    <input className="inputForm" required value={data.email} name="email" type="email" onChange={onInputChange} />
                </div>

                <div className="contentInLine" style={{ display: "flex", marginBottom: 8}}>
                    <label className="inputName" htmlFor="phone" style={{ width: "100px", marginRight: 4}}>Teléfono*</label>
                    <input className="inputForm" required value={data.phone} name="phone" type="text" onChange={onInputChange} />
                </div>

                <div className="contentInLine" style={{ display: "flex", marginBottom: 8}}>
                    <label className="inputName" htmlFor="address" style={{ width: "100px", marginRight: 4}}>Dirección*</label>
                    <input className="inputForm" required value={data.address} name="address" type="text" onChange={onInputChange} />
                </div>

                <button 
                className="botonFinalizarCompra"
                disabled={data.name === "" || data.email === "" || data.phone === "" || data.address === "" }
                type="submit">
                    <strong>Finalizar compra</strong>
                </button>
            </form>
        </div>
    )
}