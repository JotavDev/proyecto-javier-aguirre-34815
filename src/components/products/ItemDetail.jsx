import "./itemdetail.css"
import AddRemove from "../buttons/AddRemove";

function ItemDetail({product}){
    return(
        <>
            <div className="itemDetailsContent">
                <div className="itemDetailImage">
                    <img src={product.imageUrl} alt="Product img"/>
                </div>
                <div className="itemDetailInformation">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <h3>{product.price}</h3>
                    <AddRemove/>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;