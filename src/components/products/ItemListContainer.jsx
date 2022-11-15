import './itemlistcontainer.css';
import Item from "./Items";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getItems from '../../mockService';

function ItemListContainer(){
    const[products, setProducts] = useState([])
    const { idCategory } = useParams();

    async function getItemsAsync(){
        let respuesta = await getItems(idCategory);
        setProducts(respuesta)
    }

    useEffect(() => {
        getItemsAsync();
    }, [idCategory]);

    return(
        <div className='itemList'>
            <div className='cardsContainer'>
                {products.map((product) => {
                    return (
                        <>
                            <Item
                                imageUrl = {product.imageUrl}
                                id = {product.id}
                                title = {product.title}
                                price = {product.price}
                                category = {product.category}
                            />
                        </>
                    );
                })}
            </div>
        </div>
    )
}

export default ItemListContainer;