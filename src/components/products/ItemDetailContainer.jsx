import { useState, useEffect } from "react";
import { getSingleItem } from "../../mockService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./itemdetailcontainer.css"

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { idItem } = useParams();

  async function getItemsAsync() {
    let respuesta = await getSingleItem(idItem);
    setProduct(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  return (
    <>
        <div className="itemDetailContainer">
            <ItemDetail product={product} />
        </div>
    </>
  )
}

export default ItemDetailContainer;