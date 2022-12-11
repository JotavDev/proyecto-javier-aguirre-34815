import { useState, useEffect } from "react";
import { getSingleItem } from "../services/firestore";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import "./itemdetailcontainer.css"
import Loader from "../loader/Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const { idItem } = useParams();

  async function getItemsAsync() {
    getSingleItem(idItem).then( respuesta => {
      setProduct(respuesta);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getItemsAsync();
  }, []);

  if(isLoading){
    return (<Loader/>);
  } else {
    return(
      <div className="itemDetailContainer">
        <ItemDetail product={product} />
      </div>
    )
  }
}

export default ItemDetailContainer;