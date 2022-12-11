import React from "react";
import Item from "./Items";

function ItemList({ products }){
    return(
        <div className='itemList'>
            <div className='cardsContainer'>
                {products.map((product) => {
                    return (
                        <>
                            <Item
                                imageUrl = {product.imageUrl}
                                id = {product.id}
                                stock = {product.stock}
                                title = {product.title}
                                price = {product.price}
                                category = {product.category}
                                discount= {product.discount}
                            />
                        </>
                    );
                })}
            </div>
        </div>
    )
}

export default React.memo(ItemList);