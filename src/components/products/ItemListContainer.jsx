import './itemlistcontainer.css';
import Item from "./Items";
import products from "../../Products";

function ItemListContainer(){
    return(
        <div className='itemList'>
            <div className='cardsContainer'>
                {products.map((pro) => {
                    return (
                        <Item
                            imageUrl = {pro.imageUrl}
                            title = {pro.title}
                            price = {pro.price}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default ItemListContainer;