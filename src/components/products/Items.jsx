import "./items.css"
import VerMas from "../buttons/VerMas"
import { Link } from "react-router-dom"

function Item({imageUrl,title,price, id}){
    const urlDetail = `/detail/${id}`;
    return (
        <div className='card'>
            <div className='cardImage'>
                <img src={imageUrl} alt="" />
            </div>
            <div className='cardDetails'>
                <h3>{title}</h3>
                <h4>{price}</h4>
                <Link to={urlDetail}>
                    <VerMas/>
                </Link>
            </div>
        </div>
    )
}

export default Item;