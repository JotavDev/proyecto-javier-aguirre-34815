import "./itemdetail.css"
import AddRemove from "../buttons/AddRemove";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import VerMas from "../buttons/VerMas"

function ItemDetail({product}){
    const [isInCart, setIsIncart] = useState(false); 
    const { addToCart } = useContext(cartContext)

    function onAddToCart(count){
        toast.success(`Agregaste ${count} ${product.title} al carrito`, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setIsIncart(count);
        addToCart(product, count);
    }

    return(
        <>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="itemDetailsContent">
                <div className="itemDetailImage">
                    <img src={product.imageUrl} alt="Product img"/>
                </div>
                <div className="itemDetailInformation">
                    <h2>{product.title}</h2>
                    <p className="textoDetail">{product.description}</p>
                    <h3>${product.price}</h3>
                    {
                        isInCart ? 
                        <Link to="/cart">
                            <VerMas>
                                Ir al carrito
                            </VerMas> 
                        </Link>
                        : 
                        <AddRemove onAddToCart={onAddToCart} stock={product.stock}/>
                    }
                </div>
            </div>
        </>
    )
}

export default ItemDetail;