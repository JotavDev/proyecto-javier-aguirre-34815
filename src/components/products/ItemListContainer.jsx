import './itemlistcontainer.css';
import ItemList from './ItemList';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getItems, { getItemsByCategory } from '../services/firestore';
import Loader from '../loader/Loader';

function ItemListContainer(){
    const[products, setProducts] = useState(null)
    const { idCategory } = useParams();

    // Nota 2: Averiguar por qué esto no se aplica a las categorías

    async function getItemsAsync(){
        if(!idCategory){
            let respuesta = await getItems();
            setProducts(respuesta)
        } else {
            let respuesta = await getItemsByCategory(idCategory)
            setProducts(respuesta)
        }
    }

    useEffect(() => {
        getItemsAsync(); 
    }, [idCategory]);

    return <>{
        products 
            ? <ItemList products={products}/> 
            : <Loader/>
        }
    </>
}

export default ItemListContainer;