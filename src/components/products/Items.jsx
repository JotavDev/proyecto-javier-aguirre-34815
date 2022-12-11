import "./items.css"
import VerMas from "../buttons/VerMas"
import { Link } from "react-router-dom"

function Item({imageUrl,title,price, id, discount, stock, color}){
    const urlDetail = `/detail/${id}`;

    return (
        <div className='card'>
            <div className='cardImage'>
                <img src={imageUrl} alt="" />
            </div>
            <div className='cardDetails'>
                <h3>{title}</h3>
                <h4>${price}</h4>
                <h5 style={{ color: discount && "red"}}>{discount && <small>{discount} de descuento</small>}</h5>
                { stock <= 0 &&  <span>AGOTADO</span>}
                <Link to={urlDetail}>
                    <VerMas colorBtn={stock <= 0 && "#FAD9D2"}>
                        Ver más
                    </VerMas>
                </Link>
            </div>
        </div>
    )
}

export default Item;