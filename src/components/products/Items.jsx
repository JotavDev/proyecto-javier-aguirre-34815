import "./items.css"
import AddRemove from "../buttons/AddRemove"

function Item({imageUrl,title,price}){
    return (
        <div className='card'>
            <div className='cardImage'>
                <img src={imageUrl} alt="" />
            </div>
            <div className='cardDetails'>
                <h3>{title}</h3>
                <h4>{price}</h4>
            </div>
            <AddRemove/>
        </div>
    )
}

export default Item;